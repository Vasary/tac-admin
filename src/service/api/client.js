import api from "./instance/api-client"

class Client {
    products() {
        return api.get(`/products`);
    }
}

export default new Client();
