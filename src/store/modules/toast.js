export const toast = {
    namespaced: true,
    state: {
        toasts: []
    },
    actions: {
        add({commit}, toast) {
            commit("add", toast);
        },
        clear({commit}, toast) {
            commit("clear", toast);
        }
    },
    mutations: {
        add(state, toast) {
            state.toasts.push(toast);
        },
        clear(state, id) {
            const index = state.toasts.findIndex(toast => toast.id === id);
            state.toasts.splice(index, 1);
        }
    },
};
