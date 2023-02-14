<template>
  <TableView
      edit-route="attribute-edit"
      create-route="attribute-create"
      :headers="headers"
      :loader="load"
      :remover="remove"
  />
</template>

<style scoped>
</style>

<script>
import attribute from '~/service/api/attribute';
import TableView from "~/components/ListTableComponent";

export default {
  name: 'AttributeList',
  components: {
    TableView
  },
  setup() {
    const headers = [
      {text: '', value: 'id'},
      {text: 'Code', value: 'code'},
      {text: 'Name', value: 'name'},
      {text: 'Type', value: 'type'},
      {text: 'Description', value: 'description'},
      {text: 'CreatedAt', value: 'createdAt'},
      {text: 'UpdatedAt', value: 'updatedAt'},
    ];

    return {
      headers
    };
  },
  methods: {
    async load(page, size) {
      return attribute.list(page, size);
    },
    async remove(id) {
      return attribute.delete(id)
    }
  }
}
</script>
