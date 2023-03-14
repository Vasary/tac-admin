function id() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

const notification = (dispatch, response, message, type) => {
    let constraints = []

    if (undefined !== response && 'data' in response && undefined !== response.data && 'constraints' in response.data) {
        constraints = response.data.constraints
    }

    const title = undefined !== response && 'statusText' in response && '' !== response.statusText
        ? response.statusText
        : 'Unexpected error'

    dispatch('toast/add', {
        id: id(),
        title: title,
        type: type,
        message: message,
        constraints: constraints
    });
};

const setup = ({dispatch}, axiosInstance, getAccessToken) => {
    if (undefined !== getAccessToken) {
        axiosInstance.interceptors.request.use(
            async (config) => {
                const accessToken = await getAccessToken()

                config.headers = {
                    Authorization: `Bearer ${accessToken}`,
                    ...config.headers,
                }

                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    let requestsPending = 0;
    const actionScope = `loader`;

    const request = {
        pending: () => {
            requestsPending++;
            dispatch(`${actionScope}/show`);
        },
        done: () => {
            requestsPending--;
            if (requestsPending <= 0) {
                dispatch(`${actionScope}/hide`);
            }
        }
    };

    axiosInstance.interceptors.request.use(
        config => {
            request.pending();

            return config;
        },
        error => {
            requestsPending--;
            request.done();

            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        ({data}) => {
            request.done();

            return Promise.resolve(data);
        },
        error => {
            request.done();
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            switch (error.code) {
                case 'ERR_BAD_REQUEST': notification(dispatch, error.response, error.message, 'error'); break;
                default: notification(dispatch, error.response, error.message, 'error'); break;
            }

            return Promise.reject(error);
        });
};

export default setup;
