import {APISettings} from "~/config";

export const getManagementToken = () => {
    let data = new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': APISettings.sso.management.clientId,
        'client_secret': APISettings.sso.management.secret,
        'audience': APISettings.sso.management.audience
    });

    const url = APISettings.sso.management.domain + '/oauth/token';
    const init = {
        method: 'post',
        body: data,
        headers: {'content-type': 'application/x-www-form-urlencoded'}
    }

    return fetch(url, init)
        .then(response => response.json())
        .then(json => json['access_token'])
        ;
}
