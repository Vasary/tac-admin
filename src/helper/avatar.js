import gravatar from 'gravatar'

export const avatar = (email, size) => {
    return gravatar.url(email, {s: size, d: 'retro'});
}
