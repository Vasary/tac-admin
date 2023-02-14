import api from "./instance/api";

class Units {
    list(page, size) {
        return api.get(`/units?page=${page}&size=${size}`);
    }

    delete(id) {
        return api.delete('/units/' + id)
    }

    create(name, alias, suggestions) {
        return api.post('/units', {
            name: name,
            alias: alias,
            suggestions: suggestions
        })
    }

    update(name, alias, suggestions, id) {
        return api.put('/units', {
            id: id,
            name: name,
            alias: alias,
            suggestions: suggestions
        })
    }

    get(id) {
        return api.get(`/units/${id}`);
    }
}

export default new Units();
