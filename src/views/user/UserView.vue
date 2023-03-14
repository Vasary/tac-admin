<template>
    <TableView
            search-field="email"
            :headers="headers"
            :loader="load"
            :data-extractor="dataExtractor"
            :total-extractor="totalExtractor"
            :create-route="undefined"
            :searchable="true"
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
            {text: 'Logo', value: 'picture'},
            {text: 'Email', value: 'email'},
            {text: 'Name', value: 'name'},
            {text: 'Nickname', value: 'nickname'},
            {text: 'Roles', value: 'user_metadata.user_meta'},
            {text: 'Last login', value: 'last_login'},
            {text: 'Logins', value: 'logins_count'},
            {text: 'Created at', value: 'created_at'},
        ];

        return {
            headers,
        };
    },
    methods: {
        async load(page, size, searchField, searchValue) {
            --page;

            if (undefined !== searchField && '' !== searchValue) {
                return users.search(page, size, searchField, searchValue);
            }

            return users.list(page, size);
        },
        dataExtractor(response) {
            return response.users ?? []
        },
        totalExtractor(response) {
            return response.total ?? 0
        }
    }
}
</script>

<style scoped>

</style>
