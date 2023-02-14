<template>
  <span
      :class="[icon, color]"
      class="button icon primary"
  >
  </span>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/_icons.scss";

span {
  background: transparent;
  border-radius: 50%;
}

.icon {
  border: none;
  position: relative;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 70%;
  appearance: none;
  border: 0;
  display: inline-block;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 200ms ease-in-out;
  width: 24px;
  height: 24px;

  &.add.primary {
    background-image: get-icon('add', $primary);
  }

  &.add.secondary {
    background-image: get-icon('add', $secondary);
  }

  &.add.invalid {
    background-image: get-icon('add', $error);
  }

  &.trash.primary {
    background-image: get-icon('trash', $primary);
  }

  &.trash.secondary {
    background-image: get-icon('trash', $secondary);
  }

  &.trash.invalid {
    background-image: get-icon('trash', $error);
  }

  &.edit.primary {
    background-image: get-icon('edit', $primary);
  }

  &.edit.secondary {
    background-image: get-icon('edit', $secondary);
  }

  &.edit.invalid {
    background-image: get-icon('edit', $error);
  }
}
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  emits: ['click']
}
</script>
