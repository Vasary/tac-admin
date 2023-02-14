import axios from "axios";
import {APISettings} from '~/config';

const usersApi = axios.create({
    baseURL: APISettings.usersApiURL + '/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default usersApi
