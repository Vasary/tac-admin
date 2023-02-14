import api from "./instance/api";

class Category {
    list(page, size) {
        return api.get(`/category?page=${page}&size=${size}`);
    }

    create(name) {
        return api.post('/category', {
            name: name
        })
    }

    delete(id) {
        return api.delete('/category/' + id)
    }

    update(id, name) {
        return api.put('/category', {
            id: id,
            name: name
        })
    }

    get(id) {
        return api.get(`/category/${id}`);
    }
}

export default new Category();
