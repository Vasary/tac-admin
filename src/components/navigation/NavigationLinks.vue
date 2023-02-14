<template>
  <ul :class="{'horizontal': horizontal}">
    <li v-for="link of links" :key="link.to">
      <router-link :to="link.to">{{ link.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavigationLinks",
  props: {
    links: {
      required: true,
      type: Array,
    },
    horizontal: {
      default: false,
      type: Boolean,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

ul.horizontal {
  display: flex;
}

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
