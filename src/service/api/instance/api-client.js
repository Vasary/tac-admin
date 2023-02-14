import axios from "axios";
import {APISettings} from '~/config';

const apiClient = axios.create({
    baseURL: APISettings.apiClientURL + '/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default apiClient
