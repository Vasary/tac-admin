<template>
  <img v-if="!isOpen" src="../../assets/menu.svg" alt="logo">
  <img v-if="isOpen" src="../../assets/cross.svg" alt="logo">
</template>

<script>
export default {
  name: "MobileMenuButton",
  props: {
    isOpen: {
      type: Boolean,
    }
  }
}
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
