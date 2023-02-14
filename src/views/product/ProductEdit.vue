<template>
  <form class="form" @submit.prevent="send">
    <ProductForm
        :categories="categoriesList"
        v-model:name="name"
        v-model:description="description"
        v-model:category="category"
        v-model:unit="units"
        v-model:units="unitsList"
    />
    <div class="attributes-title">
      <h3>Attributes</h3>
    </div>

    <div class="add-button-wrapper">
      <BaseButton
          direction="right"
          icon="plus"
          type="button"
          color="secondary"
          @click="addAttribute"
      >Add new attribute
      </BaseButton>
    </div>

    <div class="attributes-wrapper">
      <div v-for="(attribute, index) in attributes" :key="attribute.id">
        <AttributeValueComponent
            :attributes="attributesList"
            v-model:id="attribute.id"
            v-model:parent="attribute.parent"
            v-model:value="attribute.value"
            @remove-attribute="removeAttribute(index)"
        />
      </div>
    </div>

    <div class="action-buttons">
      <UpdateActionsRowComponent
          @cancel="backToList()"
          @reset="reset()"
      />
    </div>
  </form>
</template>

<script>
import ProductForm from "../../components/form/ProductForm";
import BaseButton from "../../components/form/BaseButton";
import UpdateActionsRowComponent from "../../components/action/UpdateActionsRowComponent";
import AttributeValueComponent from "../../components/AttributeValueComponent";
import attribute from '../../service/api/attribute';
import category from '../../service/api/category';
import unit from '../../service/api/unit';
import product from '../../service/api/product';
import {ref} from "vue";
import {useRoute} from "vue-router";
import {toastUpdated} from "~/helper/toast";
import {toSaveAttributes} from "~/helper/attributes-transformet";
import {toSelect, transformAttributes} from "~/views/product/helper/helper";

export default {
  name: "ProductEdit",
  components: {
    UpdateActionsRowComponent,
    AttributeValueComponent,
    ProductForm,
    BaseButton
  },
  setup() {
    let attributesList = ref([]);
    let categoriesList = ref([]);
    let unitsList = ref([]);

    return {
      attributesList,
      categoriesList,
      unitsList,
      id: useRoute().params.id
    }
  },
  mounted() {
    attribute.list(1, 1000).then(attributes => this.attributesList = toSelect(attributes))
    category.list(1, 1000).then(categories => this.categoriesList = toSelect(categories))
    unit.list(1, 1000).then(units => this.unitsList = toSelect(units))

    product.get(this.id).then(product => {
      this.name = product.name;
      this.description = product.description;
      this.units = product.units;
      this.category = product.category;
      this.attributes = transformAttributes(product.attributes);
    })
  },
  data() {
    return {
      attributes: [],
      units: [],
      name: null,
      description: null,
      category: null,
    }
  },
  methods: {
    backToList() {
      this.$router.push({name: 'products'});
    },
    reset() {
      this.attributes = [];
      this.units = [];
      this.name = null;
      this.description = null;
      this.category = null;
    },
    removeAttribute(index) {
      this.attributes.splice(index, 1);
    },
    addAttribute() {
      this.attributes.push({parent: null, attribute: null, value: null});
    },
    send() {
      const handler = () => {
        this.$store.commit('toast/add', toastUpdated());
      }

      product.update(
          this.id,
          this.name,
          this.description,
          this.category,
          toSaveAttributes(this.attributes),
          this.units,
      ).then(response => handler(response));
    },
  }
}
</script>

<style scoped>
.add-button-wrapper {
  text-align: right;
}

.action-buttons {
  margin-top: 40px;
}

.attributes-title {
  margin-top: 40px;
  margin-bottom: 40px;
}

.title-wrapper {
  padding: 20px;
}

.attributes-wrapper {
  margin-top: 40px;
}
</style>
