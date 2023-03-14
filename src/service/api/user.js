import api from "./instance/users"

class Users {
    list(page, size) {
        return api.get(`/api/v2/users?page=${page}&per_page=${size}&include_totals=true`);
    }

    search(page, size, searchField, searchValue) {
        return api.get(`/api/v2/users?q=${searchField}:*${searchValue}*&page=${page}&per_page=${size}&include_totals=true&search_engine=v3`);
    }
}

export default new Users();
