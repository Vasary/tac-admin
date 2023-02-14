import axiosInstance from "./instance/api";

function id() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

const setup = ({dispatch}, getAccessToken) => {
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

    const toast = {
        success: (response, message) => {
            toast.send(response, message, 'success');
        },
        error: (response, message) => {
            toast.send(response, message, 'error');
        },
        validation: (response, message) => {
            toast.send(response, message, 'error');
        },
        send: (response, message, type) => {
            let constraints = []

            if (undefined !== response && undefined !== response.data && undefined !== response.data.constraints) {
                constraints = response.data.constraints
            }

            dispatch('toast/add', {
                id: id(),
                title: `${response.statusText}`,
                type: type,
                message: message,
                constraints: constraints
            });
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
                case 'ERR_BAD_REQUEST':
                    toast.validation(error.response, error.message)
                    break;

                default:
                    toast.error(error.response, error.message)
                    break;
            }

            return Promise.reject(error);
        });
};

export default setup;
