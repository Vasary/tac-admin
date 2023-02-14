<template>
    <a
            :style="{backgroundImage:'url(' + link + ')'}"
            :class="size"
            @click="logout()"
    />
</template>

<script>
import {useAuth0} from '@auth0/auth0-vue';

export default {
    name: "UserAvatar",
    props: {
        link: {
            required: true
        },
        size: {
            require: true
        }
    },
    setup() {
        const {logout} = useAuth0();

        return {
            logout: () => {
                logout();
            }
        };
    }
}
</script>

<style lang="scss" scoped>
a.small {
  width: 36px;
  height: 36px;
}

a.medium {
  width: 50px;
  height: 50px;
}

a:hover {
  background-image: url("@/assets/standby.svg") !important;
}

a {
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
  transition: background-image 0.2s ease-in-out;
  cursor: pointer;
}
</style>
