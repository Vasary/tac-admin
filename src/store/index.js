import {loader} from './modules/loader';
import {toast} from './modules/toast';
import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {}
    },
    modules: {
        loader,
        toast,
    }
})
