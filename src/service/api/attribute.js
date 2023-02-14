import api from "./instance/api";

class Attribute {
    create(name, description, code, type) {
        return api.post('/attributes', {
            code: code,
            type: type,
            name: name,
            description: description,
        })
    }

    update(name, description, code, type, id) {
        return api.put('/attributes', {
            id: id,
            code: code,
            type: type,
            name: name,
            description: description,
        })
    }

    delete(id) {
        return api.delete(`/attributes/${id}`);
    }

    list(page, size) {
        return api.get(`/attributes?page=${page}&size=${size}`);
    }

    get(id) {
        return api.get(`/attributes/${id}`);
    }
}

export default new Attribute();