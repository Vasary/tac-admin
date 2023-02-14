<template>
  <TableView
      create-route="list-create"
      :headers="headers"
      :loader="load"
      :data-extractor="dataExtractor"
  />
  <router-view/>
</template>

<script>
import TableView from "~/components/ListTableComponent.vue";
import adminApi from "~/service/api/apiAdmin";

export default {
  name: "ListsView",
  components: {
    TableView,
  },
  setup() {
    const headers = [
      {text: '', value: 'id'},
      {text: 'List name', value: 'title'},
      {text: 'Owner', value: 'members'},
      {text: 'Items', value: 'items'},
      {text: 'Created at', value: 'createdAt'},
    ];

    return {
      headers,
    };
  },
  methods: {
    async load(page, size) {
      return adminApi.lists(page, size);
    },
    dataExtractor(response) {
      return response.data.items ?? []
    }
  }
}
</script>

<style scoped>

</style>
