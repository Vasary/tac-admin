import {createApp} from 'vue'
import App from '~/App.vue'
import router from '~/router'
import setupInterceptors from '~/service/api/setupInterceptors';
import {store} from '~/store';
import breadcrumbs from 'vue-3-breadcrumbs'
import {auth0} from "~/security/auth0";

const auth0plugin = auth0

setupInterceptors(store, auth0plugin.getAccessTokenSilently);

createApp(App)
    .use(router)
    .use(store)
    .use(breadcrumbs)
    .use(auth0plugin)
    .mount('#app')
