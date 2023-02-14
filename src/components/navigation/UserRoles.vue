<template>
  <div class="userRoles">{{ roles }}</div>
</template>

<script>
export default {
  name: "UserRoles",
  props: {
    roles: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

div {
  color: $secondary;
  font-size: 10px;
}
</style>
