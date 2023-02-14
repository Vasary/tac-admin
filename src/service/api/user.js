import api from "./instance/users"

class Users {
    list(page, size) {
        return api.get(`/users?page=${page}&limit=${size}`);
    }

    search(pattern) {
        return api.get(`/users/${pattern}`);
    }
}

export default new Users();
