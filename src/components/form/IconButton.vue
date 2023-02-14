<template>
  <button
      type="button"
      :class="[icon, color]"
      @click="$emit('click')"
  >
  </button>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/_icons.scss";

button {
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-size: 100%;
  width: 24px;
  height: 24px;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    transform: scale(1.25, 1.25);
  }

  &.trash.warning {
    background-image: get-icon('trash', $error);
  }

  &.edit.primary {
    background-image: get-icon('edit', $primary);
  }

  &.edit.secondary {
    background-image: get-icon('edit', $secondary);
  }

  &.edit.warning {
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
