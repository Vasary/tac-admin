export const APISettings = {
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }),
    apiCoreURL: process.env.VUE_APP_API_CORE,
    apiAdminURL: process.env.VUE_APP_API_ADMIN,
    apiClientURL: process.env.VUE_APP_API_CLIENT,
    sso: {
        auth: {
            domain: process.env.VUE_APP_SSO_DOMAIN,
            clientId: process.env.VUE_APP_SSO_CLIENT_ID,
            secret: process.env.VUE_APP_SSO_SECRET,
            audience: process.env.VUE_APP_SSO_AUDIENCE,
        },
        management: {
            domain: process.env.VUE_APP_SSO_MACHINE_TO_MACHINE_DOMAIN,
            clientId: process.env.VUE_APP_SSO_MACHINE_TO_MACHINE_CLIENT_ID,
            secret: process.env.VUE_APP_SSO_MACHINE_TO_MACHINE_SECRET,
            audience: process.env.VUE_APP_SSO_MACHINE_TO_MACHINE_AUDIENCE,
        }
    }
}
