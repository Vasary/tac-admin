import axios from "axios";
import {APISettings} from '~/config';

const usersApi = axios.create({
    baseURL: APISettings.sso.management.domain,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default usersApi
