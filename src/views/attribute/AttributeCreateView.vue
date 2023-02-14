<template>
  <div class="form">
    <form @submit.prevent="send">
      <AttributeForm
          v-model:code="form.code"
          v-model:type="form.type"
          v-model:name="form.name"
          v-model:description="form.description"
      />
      <div class="mt-30">
        <CreateActionsRowComponent
            @reset="resetForm"
            @cancel="returnToList"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>

<script>
import attribute from '../../service/api/attribute';
import AttributeForm from "../../components/form/AttributeForm";
import CreateActionsRowComponent from "../../components/action/CreateActionsRowComponent";
import {toastCreated} from "~/helper/toast";

export default {
  name: 'AttributeCreate',
  components: {
    CreateActionsRowComponent,
    AttributeForm,
  },
  data() {
    return {
      form: {
        code: '',
        type: null,
        name: '',
        description: ''
      }
    }
  },
  methods: {
    resetForm() {
      this.form.code = '';
      this.form.type = null;
      this.form.name = '';
      this.form.description = '';
    },
    returnToList() {
      this.$router.push({name: 'attributes'});
    },
    send() {
      const handler = response => {
        this.$store.commit('toast/add', toastCreated('Edit attribute', 'attribute-edit', {id: response.id}));
      }

      attribute.create(this.form.name, this.form.description, this.form.code, this.form.type)
          .then(response => handler(response));
    }
  }
}
</script>
