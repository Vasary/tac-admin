<template>
  <TableView
      create-route="category-create"
      edit-route="category-edit"
      :headers="headers"
      :loader="load"
      :remover="remove"
  />
</template>

<style>
</style>

<script>
import category from "~/service/api/category";
import TableView from "~/components/ListTableComponent";

export default {
  name: 'CategoryList',
  components: {
    TableView,
  },
  setup() {
    const headers = [
      {text: '', value: 'id'},
      {text: 'Name', value: 'name'},
      {text: 'Creator', value: 'creator'},
      {text: 'CreatedAt', value: 'createdAt'},
      {text: 'UpdatedAt', value: 'updatedAt'},
    ];

    return {
      headers,
    };
  },
  methods: {
    async load(page, size) {
      return category.list(page, size);
    },
    async remove(id) {
      return category.delete(id)
    }
  }
}
</script>
