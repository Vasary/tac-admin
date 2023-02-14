<template>
  <TableView
      edit-route="product-edit"
      create-route="product-create"
      :headers="headers"
      :loader="load"
      :remover="remove"
  />
</template>

<style>
</style>

<script>
import TableView from "~/components/ListTableComponent";
import products from "../../service/api/product";

export default {
  name: 'ProductList',
  components: {
    TableView
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
      return products.list(page, size);
    },
    async remove(id) {
      return products.delete(id)
    }
  }
}
</script>
