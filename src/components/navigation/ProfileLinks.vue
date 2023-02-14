<template>
  <ul>
    <li>
      <UserInfo
          :avatar="avatar"
          :email="email"
          :name="name"
      />
    </li>
    <li>
      <a href="http://oauth-proxy.tac.com/profile">Profile</a>
    </li>
    <li>
      <a href="http://oauth-proxy.tac.com/profile">Settings</a>
    </li>
    <li>
      <a href="http://oauth-proxy.tac.com/sign_out">Sign out</a>
    </li>
  </ul>
</template>

<script>
import UserInfo from "~/components/navigation/UserInfo";

export default {
  name: "ProfileLinks",
  components: {UserInfo},
  props: {
    avatar: String,
    email: String,
    name: String,
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

ul {
  list-style: none;

  li {
    border-radius: 10px;
    margin-left: 4px;
    margin-right: 4px;

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
</style>
