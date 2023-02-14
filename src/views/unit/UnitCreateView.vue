<template>
  <div class="form">
    <form @submit.prevent="send">
      <UnitForm
          v-model:name="name"
          v-model:alias="alias"
          v-model:suggestions="suggestions"
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
import CreateActionsRowComponent from "~/components/action/CreateActionsRowComponent";
import UnitForm from "~/components/form/UnitForm";
import unit from '~/service/api/unit';
import {toastCreated} from "~/helper/toast";

export default {
  name: 'UnitCreate',
  components: {
    UnitForm,
    CreateActionsRowComponent
  },
  data() {
    return {
      name: '',
      alias: '',
      suggestions: []
    }
  },
  methods: {
    resetForm() {
      this.name = '';
      this.alias = '';
      this.suggestions = [];
    },
    send() {
      const handler = response => {
        this.$store.commit('toast/add', toastCreated('Edit unit', 'unit-edit', {id: response.id}));
      }

      const suggestions = this.suggestions.map(s => parseInt(s));

      unit.create(this.name, this.alias, suggestions).then(response => handler(response));
    },
    returnToList() {
      this.$router.push({name: 'units'});
    },
  }
}
</script>
