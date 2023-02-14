<template>
  <TableView
      :headers="headers"
      :loader="load"
      :data-extractor="dataExtractor"
      :create-route="undefined"
  />
</template>

<script>
import users from '~/service/api/user';
import TableView from "~/components/ListTableComponent.vue";

export default {
  name: "UserView",
  components: {
    TableView,
  },
  setup() {
    const headers = [
      {text: '', value: 'id'},
      {text: 'Email', value: 'email'},
      {text: 'Roles', value: 'roles'},
      {text: 'Created at', value: 'createdAt'},
    ];

    return {
      headers,
    };
  },
  methods: {
    async load(page, size) {
      return users.list(page, size);
    },
    dataExtractor(response) {
      return response.data.items ?? []
    }
  }
}
</script>

<style scoped>

</style>
