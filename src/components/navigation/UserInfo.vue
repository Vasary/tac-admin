<template>
  <div class="profile">
    <div class="picture">
      <UserAvatar :link="avatar" size="medium"/>
    </div>
    <div class="name">{{ name }}</div>
    <div class="email">{{ email }}</div>
  </div>
</template>

<script>
import UserAvatar from "~/components/navigation/UserAvatar";

export default {
  name: "UserInfo",
  components: {
    UserAvatar
  },
  props: {
    avatar: String,
    email: String,
    name: String,
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.profile {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 64px;
  position: relative;
  top: 0;
  left: 0;
  align-content: flex-start;
}

.picture {
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
  width: 74px;
}

.name {
  flex: 0 0 50%;
  order: 0;
  flex-wrap: nowrap;
  align-items: center;
  display: flex;
  color: $white;
}

.email {
  flex: 0 0 50%;
  flex-wrap: nowrap;
  align-items: flex-start;
  display: flex;
  color: $info;
}
</style>
