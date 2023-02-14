export const APISettings = {
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }),
    apiCoreURL: process.env.VUE_APP_API_CORE,
    usersApiURL: process.env.VUE_APP_API_USERS,
    apiAdminURL: process.env.VUE_APP_API_ADMIN,
    apiClientURL: process.env.VUE_APP_API_CLIENT,
    sso: {
        domain: process.env.VUE_APP_SSO_DOMAIN,
        clientId: process.env.VUE_APP_SSO_CLIENT_ID,
        audience: process.env.VUE_APP_SSO_AUDIENCE,
    }
}
