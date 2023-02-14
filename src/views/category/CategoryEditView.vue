<template>
  <div class="form">
    <form @submit.prevent="update">
      <CategoryForm v-model:category-name.trim="categoryName"/>
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
import category from '../../service/api/category';
import {useRoute} from "vue-router";
import UpdateActionsRowComponent from "../../components/action/UpdateActionsRowComponent";
import CategoryForm from "../../components/form/CategoryForm";
import {toastUpdated} from "~/helper/toast";

export default {
  name: 'CategoryEdit',
  components: {
    CategoryForm,
    UpdateActionsRowComponent,
  },
  data() {
    return {
      categoryName: null,
    }
  },
  setup() {
    const route = useRoute();

    return {
      id: route.params.id,
    }
  },
  mounted() {
    category.get(this.id).then(category => this.categoryName = category.name)
  },
  methods: {
    resetForm() {
      this.categoryName = null;
    },
    returnToList() {
      this.$router.push({name: 'categories'});
    },
    update() {
      const handler = () => {
        this.$store.commit('toast/add', toastUpdated());
      }

      category.update(this.id, this.categoryName).then(() => handler());
    }
  }
}
</script>
