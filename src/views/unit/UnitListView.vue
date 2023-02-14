<template>
  <TableView
      edit-route="unit-edit"
      create-route="unit-create"
      :headers="headers"
      :loader="load"
      :remover="remove"
  />
</template>

<style scoped>
</style>

<script>
import TableView from "~/components/ListTableComponent";
import unit from '~/service/api/unit'

export default {
  name: 'UnitList',
  components: {
    TableView,
  },
  setup() {
    const headers = [
      {text: '', value: 'id'},
      {text: 'Name', value: 'name'},
      {text: 'Alias', value: 'alias'},
      {text: 'Suggestions', value: 'suggestions'},
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
      return unit.list(page, size);
    },
    async remove(id) {
      return unit.delete(id)
    }
  }
}
</script>
