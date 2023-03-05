<template>
    <nav>
        <div class="top-bar">
            <div class="logo-box">
                <SiteLogo class="desktop-icon"/>
                <div class="mobile-menu-icon" @click="toggleMobileMenu">
                    <MobileMenuButton :is-open="openMobileMenu"/>
                </div>
            </div>
            <div>
                <SiteLogo class="mobile-logo-center"/>
                <NavigationLinks :links="links" class="horizontal-navigation-links" :horizontal="true"/>
            </div>
            <div class="user-box" v-if="!isAuthenticationInProgress">
                <UserName class="user" :name="name"/>
                <UserAvatar class="avatar" :link="avatar(email)" size="small"/>
            </div>
            <div class="user-box-loader" v-if="isAuthenticationInProgress">
                <img src="../assets/loading.svg">
            </div>
        </div>
        <div class="mobile-navigation-box" v-if="openMobileMenu">
            <NavigationLinks :links="links"/>
            <div class="delimiter"/>
            <ProfileLinks :avatar="avatar(email)" :name="name" :email="email"/>
        </div>
    </nav>

    {{ token() }}

</template>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

nav {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  background-color: $navigation-background;
  width: 100%;

  .mobile-navigation-box {
    padding: 8px 8px 12px;
    position: absolute;
    z-index: 10;
    width: 100%;
    background-color: $navigation-background;
    display: none;

    .delimiter {
      background: #374151;
      height: 1px;
      width: 100%;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }

  .mobile-menu-icon, .mobile-logo-center {
    display: none;
  }

  @media screen and (max-width: 812px) {
    .horizontal-navigation-links, .desktop-icon, .user, .avatar {
      display: none;
    }

    .mobile-menu-icon, .mobile-logo-center, .mobile-navigation-box {
      display: block !important;
    }
  }

  .top-bar {
    height: 64px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    .logo-box {
      .mobile-icon {
        cursor: pointer;
        display: none;
      }
    }

    .user-box-loader {
      min-width: 150px;
      display: flex;
      height: 36px;
      justify-content: center
    }

    .user-box {
      min-width: 150px;
      display: flex;

      .user {
        margin-right: 20px;
      }
    }
  }
}
</style>

<script>
import {avatar} from "~/helper/avatar"
import SiteLogo from "~/components/navigation/SiteLogo";
import NavigationLinks from "~/components/navigation/NavigationLinks";
import UserName from "~/components/navigation/UserName";
import UserAvatar from "~/components/navigation/UserAvatar";
import MobileMenuButton from "~/components/navigation/MobileMenuButton";
import {ref} from "vue";
import {useAuth0} from "@auth0/auth0-vue";
import ProfileLinks from "~/components/navigation/ProfileLinks.vue";

export default {
    name: 'NavigationComponent',
    components: {ProfileLinks, MobileMenuButton, UserAvatar, UserName, NavigationLinks, SiteLogo},
    computed: {
        roles() {
            if (this.user.user_roles !== undefined) {
                return this.user.user_roles.split(',')
            }

            return []
        },
        email() {
            return this.isAuthenticated ? this.user.email : ''
        },
        name() {
            return this.isAuthenticated ? this.user.nickname : ''
        },
        isAuthenticationInProgress() {
            return !this.isAuthenticated
        }
    },
    setup() {
        const {user, isLoading, isAuthenticated} = useAuth0();

        return {
            openMobileMenu: ref(false),
            links: [
                {to: '/dashboard', title: 'Dashboard'},
                {to: '/users', title: 'Users'},
                {to: '/lists', title: 'Lists'},
                {to: '/products', title: 'Products'},
                {to: '/attributes', title: 'Attributes'},
                {to: '/category', title: 'Categories'},
                {to: '/unit', title: 'Units of measurement'},
            ],
            user,
            isLoading,
            isAuthenticated
        }
    },
    methods: {
        avatar,
        toggleMobileMenu() {
            this.openMobileMenu = !this.openMobileMenu;
        },
        token() {
            this.$auth0.getAccessTokenSilently().then(result => console.log(result))

            return ''
        }
    },
}
</script>
