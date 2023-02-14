<template>
  <div class="form">
    <form @submit.prevent="update">
      <UnitForm
          v-model:name="name"
          v-model:alias="alias"
          v-model:suggestions="suggestions"
      />
      <div class="mt-30">
        <UpdateActionsRowComponent
            @reset="resetForm"
            @cancel="returnToList"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>

<script>
import UpdateActionsRowComponent from "~/components/action/UpdateActionsRowComponent";
import UnitForm from "~/components/form/UnitForm";
import unit from '~/service/api/unit';
import {useRoute} from "vue-router";
import {toastUpdated} from "~/helper/toast";

export default {
  name: 'UnitEdit',
  components: {
    UnitForm,
    UpdateActionsRowComponent
  },
  data() {
    return {
      name: '',
      alias: '',
      suggestions: []
    }
  },
  mounted() {
    unit.get(this.id).then(unit => {
      this.name = unit.name;
      this.alias = unit.alias;
      this.suggestions = unit.suggestions.map(s => s.toString());
    })
  },
  setup() {
    return {
      id: useRoute().params.id
    }
  },
  methods: {
    resetForm() {
      this.name = '';
      this.alias = '';
      this.suggestions = [];
    },
    returnToList() {
      this.$router.push({name: 'units'});
    },
    update() {
      const suggestions = this.suggestions.map(s => parseInt(s));

      const handler = () => {
        this.$store.commit('toast/add', toastUpdated());
      }

      unit.update(this.name, this.alias, suggestions, this.id).then(() => handler());
    }
  }
}
</script>
