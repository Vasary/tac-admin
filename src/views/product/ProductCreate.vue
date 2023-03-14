<template>
  <form class="form" @submit.prevent="send">
    <ProductForm
        :categories="categoriesList"
        :units="unitsList"
        v-model:name="name"
        v-model:description="description"
        v-model:category="category"
        v-model:unit="units"
    />
    <div class="attributes-title">
      <h2>Attributes</h2>
    </div>

    <div class="add-button-wrapper">
      <BaseButton
          direction="right"
          icon="plus"
          type="button"
          color="secondary"
          @click="addAttribute"
      >Add attribute
      </BaseButton>
    </div>

    <div class="attributes-wrapper">
      <div v-for="(attribute, index) in attributes" :key="attribute.id">
        <AttributeValueComponent
            :attributes="attributesList"
            v-model:parent="attribute.parent"
            v-model:id="attribute.id"
            v-model:value="attribute.value"
            @remove-attribute="removeAttribute(index)"
        />
      </div>
    </div>

    <div class="action-buttons">
      <CreateActionsRowComponent
          @cancel="backToList()"
          @reset="reset()"
      />
    </div>
  </form>
</template>

<script>
import ProductForm from "~/components/form/ProductForm";
import BaseButton from "~/components/form/BaseButton";
import CreateActionsRowComponent from "~/components/action/CreateActionsRowComponent";
import AttributeValueComponent from "~/components/AttributeValueComponent";
import attribute from '~/service/api/attribute';
import category from '~/service/api/category';
import unit from '~/service/api/unit';
import product from '~/service/api/product';
import {ref} from "vue";
import {toSaveAttributes} from '~/helper/attributes-transformet'
import {toastCreated} from "~/helper/toast";
import {toSelect} from "~/views/product/helper/helper";

export default {
  name: "ProductCreate",
  components: {
    CreateActionsRowComponent,
    AttributeValueComponent,
    ProductForm,
    BaseButton
  },
  setup() {
    return {
      attributesList: ref([]),
      categoriesList: ref([]),
      unitsList: ref([]),
    }
  },
  mounted() {
    attribute.list(1, 1000).then(attributes => this.attributesList = toSelect(attributes))
    category.list(1, 1000).then(categories => this.categoriesList = toSelect(categories))
    unit.list(1, 1000).then(units => this.unitsList = toSelect(units))
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
      this.attributes.push({parent: null, id: null, value: null});
    },
    send() {
      const handler = response => {
        this.$store.commit('toast/add', toastCreated('Edit product', 'product-edit', {id: response.id}));
      }

      product.create(
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
  margin-top: 20px;
  margin-bottom: 20px;
}

.attributes-wrapper {
  margin-top: 40px;
}

.attributes-wrapper > div {
  margin-bottom: 20px;
}
</style>
