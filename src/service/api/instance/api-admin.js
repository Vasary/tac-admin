import axios from "axios";
import {APISettings} from '~/config';

const apiAdmin = axios.create({
    baseURL: APISettings.apiAdminURL + '/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default apiAdmin
