import {createAuth0} from "@auth0/auth0-vue";
import {APISettings} from '~/config';

export const auth0 = createAuth0({
    domain: APISettings.sso.domain,
    clientId: APISettings.sso.clientId,
    authorizationParams: {
        redirect_uri: window.location.origin,
        audience: APISettings.sso.audience
    },
});
