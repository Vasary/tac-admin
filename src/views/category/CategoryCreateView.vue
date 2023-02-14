<template>
  <div class="form">
    <form @submit.prevent="send">
      <CategoryForm v-model:category-name.trim="categoryName"/>
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
import CategoryForm from "~/components/form/CategoryForm";
import category from '~/service/api/category';
import {toastCreated} from "~/helper/toast";

export default {
  name: 'CategoryCreate',
  components: {
    CategoryForm,
    CreateActionsRowComponent,
  },
  data() {
    return {
      categoryName: null,
    }
  },
  methods: {
    resetForm() {
      this.categoryName = null;
    },
    send() {
      const handler = response => {
        this.$store.commit('toast/add', toastCreated('Edit category', 'category-edit', {id: response.id}));
      }

      category.create(this.categoryName).then(response => handler(response))
    },
    returnToList() {
      this.$router.push({name: 'categories'});
    },
  }
}
</script>
