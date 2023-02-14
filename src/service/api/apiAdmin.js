import api from "./instance/api-admin"

class ApiAdmin {
    lists(page, size) {
        return api.get(`/list?page=${page}&limit=${size}`);
    }
}

export default new ApiAdmin();
