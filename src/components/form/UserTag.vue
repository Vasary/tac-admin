<template>
  <div class="tag">
    <div>{{ name }}</div>
    <div class="remove"/>
  </div>
</template>

<script>
export default {
  name: "UserTag",
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "src/assets/scss/_icons.scss";

.tag {
  border-radius: 2px;
  display: inline-flex;
  background-color: $secondary;
  color: $text-color;
  padding: 5px 8px;
  margin: 2px;
  font-size: 12px;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
}

.remove {
  cursor: pointer;
  margin-left: 8px;
  width: 14px;
  height: 14px;
  background-size: cover;
  background-image: get-icon('cross', $error);
}
</style>
