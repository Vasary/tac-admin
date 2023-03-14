import {createApp} from 'vue'
import App from '~/App.vue'
import router from '~/router'
import setupInterceptors from '~/service/api/setupInterceptors';
import {store} from '~/store';
import breadcrumbs from 'vue-3-breadcrumbs'
import {auth0} from "~/security/auth0";
import {users, inventory, apiAdmin, apiClient} from "~/service/api/instance";
import {getManagementToken} from "~/service/api/users/token";

const auth0plugin = auth0

setupInterceptors(store, users, getManagementToken);
setupInterceptors(store, inventory, auth0plugin.getAccessTokenSilently);
setupInterceptors(store, apiAdmin, auth0plugin.getAccessTokenSilently);
setupInterceptors(store, apiClient, auth0plugin.getAccessTokenSilently);

createApp(App)
    .use(router)
    .use(store)
    .use(breadcrumbs)
    .use(auth0plugin)
    .mount('#app')
