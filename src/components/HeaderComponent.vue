<template>
    <header>
        <div id="loader" v-if="!isAuthenticated">
            <div class="user">
                <img src="../assets/loading.svg" alt="loading"/>
            </div>
        </div>
        <div id="wrapper" v-if="isAuthenticated">
            <div id="user">
                <UserName :name="user.nickname"/>
            </div>
            <nav>
                <ul>
                    <li v-for="link of links" :key="link.to">
                        <router-link :to="link.to">{{ link.title }}</router-link>
                    </li>
                </ul>
            </nav>
            <div id="hamburger-icon" :class="{'open': mobileMenuActive}" @click="toggleMobileMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <ul class="mobile-menu">
                    <li v-for="link of links" :key="link.to">
                        <router-link :to="link.to">{{ link.title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

header {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  background-color: $navigation-background;
  width: 100%;
  height: 64px;
  padding-left: 30px;
  padding-right: 30px;

  #loader {
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    .user {
      min-width: 150px;
      height: 36px;
      text-align: center;

      img {
        height: inherit;
        width: inherit;
      }
    }
  }

  #wrapper {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    height: inherit;

    #user {
      display: flex;
      align-items: center;
    }

    .open .bar1 {
      -webkit-transform: rotate(-45deg) translate(-6px, 6px);
      transform: rotate(-45deg) translate(-6px, 6px);
    }

    .open .bar2 {
      opacity: 0;
    }

    .open .bar3 {
      -webkit-transform: rotate(45deg) translate(-6px, -8px);
      transform: rotate(45deg) translate(-6px, -8px);
    }

    .open .mobile-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      z-index: 100;
      background-color: $navigation-background;
    }

    .mobile-menu {
      display: none;
      position: absolute;
      top: 64px;
      left: 0;
      height: calc(100vh - 64px);
      width: 100%;
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;

      li {
        border-radius: 10px;
        margin-left: 2px;
        margin-right: 2px;

        a {
          display: inline-block;
          padding: 10px 15px;
          text-decoration: none;
          color: $navigation-item-link;
          cursor: pointer;

          &.active {
            color: $white;
          }
        }

        &:has(a.active) {
          background-color: $navigation-item-active;
          color: $white;
        }

        &:hover {
          background-color: $navigation-item-hover;
        }
      }
    }
  }

  #hamburger-icon {
    margin: auto 0;
    display: none;
    cursor: pointer;
  }

  #hamburger-icon div {
    width: 35px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
  }
}

@media only screen and (max-width: 1008px) {
  header #wrapper nav {
    display: none;
  }

  header #wrapper #hamburger-icon {
    display: block;
  }
}

</style>

<script>
import UserName from "~/components/UserName.vue";
import {avatar} from "~/helper/avatar"
import {useAuth0} from "@auth0/auth0-vue";

export default {
    name: "HeaderComponent",
    components: {UserName},
    setup() {
        const {user, isLoading, isAuthenticated} = useAuth0();

        return {
            user,
            isLoading,
            isAuthenticated,
            links: [
                {to: '/dashboard', title: 'Dashboard'},
                {to: '/users', title: 'Users'},
                {to: '/lists', title: 'Lists'},
                {to: '/products', title: 'Products'},
                {to: '/attributes', title: 'Attributes'},
                {to: '/category', title: 'Categories'},
                {to: '/unit', title: 'Units of measurement'},
            ],
        }
    },
    data() {
        return {
            mobileMenuActive: false
        }
    },
    methods: {
        avatar,
        toggleMobileMenu() {
            this.mobileMenuActive = !this.mobileMenuActive;
        }
    }
}
</script>
