export const toastCreated = (name, route, params) => {
    return {
        title: 'Created',
        type: 'success',
        redirect: {
            route: route,
            params: params,
            name: name
        },
    };
}

export const toastUpdated = (name, route, params) => {
    return {
        title: 'Updated',
        type: 'info',
        redirect: {
            route: route,
            params: params,
            name: name
        },
    };
}

export const toastRemoved = () => {
    return {
        title: 'Removed',
        type: 'info'
    };
}
