<template>
  <div class="userName">{{ name }}</div>
</template>

<script>
export default {
  name: "UserName",
  props: {
    name: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

div {
  padding: 10px 15px;
  color: $navigation-item-link;
  background-color: $navigation-item-hover;
  border-radius: 10px;
}
</style>
