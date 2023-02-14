import axios from "axios";
import {APISettings} from '~/config';

const instance = axios.create({
    baseURL: APISettings.apiCoreURL + '/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Language': 'en',
    },
    withCredentials: true
});

export default instance;
