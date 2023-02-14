<template>
  <div class="form">
    <form @submit.prevent="update">
      <AttributeForm
          v-model:code="form.code"
          v-model:type="form.type"
          v-model:name="form.name"
          v-model:description="form.description"
          :code-readonly="true"
      />
      <row container :gutter="12">
        <column :xs="12">
          <div class="call-to-action-wrapper">
            <div class="reset">
              <BaseButton
                  direction="left"
                  icon="cross"
                  type="button"
                  route="attributes"
                  color="warning"
                  @click="returnToList"
              >Cancel
              </BaseButton>
            </div>
            <div class="submit-button">
              <BaseButton
                  direction="right"
                  icon="arrow"
                  type="submit"
                  route="attributes"
                  color="primary"
              >Update
              </BaseButton>
            </div>
          </div>
        </column>
      </row>
    </form>
  </div>
</template>

<style scoped>
.call-to-action-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.call-to-action-wrapper > div:last-child {
  margin-left: 10px;
}

</style>

<script>
import BaseButton from "../../components/form/BaseButton";
import {Column, Row} from 'vue-grid-responsive';
import attribute from '../../service/api/attribute';
import AttributeForm from "../../components/form/AttributeForm";
import {useRoute} from "vue-router";
import {toastUpdated} from "~/helper/toast";

export default {
  name: 'AttributeEdit',
  components: {
    AttributeForm,
    BaseButton,
    row: Row,
    column: Column,
  },
  setup() {
    const route = useRoute();

    return {
      id: route.params.id
    }
  },
  mounted() {
    attribute.get(this.id)
        .then(attribute => {
          this.form.code = attribute.code;
          this.form.type = attribute.type;
          this.form.name = attribute.name;
          this.form.description = attribute.description;
        })
  },
  data() {
    return {
      form: {
        code: null,
        type: null,
        name: null,
        description: null
      }
    }
  },
  methods: {
    returnToList() {
      this.$router.push({name: 'attributes'});
    },
    update() {
      const handler = () => {
        this.$store.commit('toast/add', toastUpdated());
      }

      attribute.update(this.form.name, this.form.description, this.form.code, this.form.type, this.id).then(() => handler());
    }
  }
}
</script>
