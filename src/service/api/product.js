import api from "./instance/api";

class Product {
    create(name, description, category, attributes, units) {
        return api.post('/products', {
            name: name,
            description: description,
            category: category,
            attributes: attributes,
            units: units
        })
    }

    update(id, name, description, category, attributes, units) {
        return api.put('/products', {
            id: id,
            name: name,
            description: description,
            category: category,
            attributes: attributes,
            units: units
        })
    }

    get(id) {
        return api.get(`/products/${id}`);
    }

    list(page, size) {
        return api.get(`/products?page=${page}&size=${size}`);
    }

    delete(id) {
        return api.delete(`/products/${id}`);
    }
}

export default new Product();