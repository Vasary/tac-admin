<template>
  <button
      :class="[direction, icon, color]"
      :type="type"
      @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/_icons.scss";

button {
  background: transparent;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  font-size: 1em;
  display: inline-block;
  text-transform: uppercase;
  padding: 0.5em 2em;
  min-width: 50px;
  text-align: center;
  transition: 0.02s 0.2s cubic-bezier(0.1, 0, 0.1, 1);

  &.warning {
    color: $error;
    border: 1px solid $error;
  }

  &.warning::before {
    background: $error;
  }

  &.primary {
    color: $primary;
    border: 1px solid $primary;
  }

  &.primary::before {
    background: $primary;
  }

  &.secondary {
    color: $secondary;
    border: 1px solid $secondary;
  }

  &.secondary::before {
    background: $secondary;
  }

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    background-size: 1.5em;
    background-repeat: no-repeat;
    background-position: center;
  }

  &.arrow::after {
    background-image: get-icon('check', $white);
  }

  &.cross::after {
    background-image: get-icon('cross', $white);
  }

  &.update::after {
    background-image: get-icon('update', $white);
  }

  &.plus::after {
    background-image: get-icon('plus', $white);
  }

  &.trash::after {
    background-image: get-icon('cross', $white);
  }

  &.left {
    &:hover {
      padding: 0.5em 0.5em 0.5em 3.5em;
    }

    &::before {
      transition: 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1), right 0.3s cubic-bezier(0.1, 0, 0.1, 1);
      left: 100%;
      right: 0;
    }

    &::after {
      transition: left 0.3s cubic-bezier(0.1, 0, 0.1, 1);
      transform: rotate(180deg);
      left: 3em;
      right: calc(100% - 3em);
    }

    &:hover::before {
      left: 0;
      right: calc(100% - 42px);
      transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1), right 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }

    &:hover::after {
      left: 0;
      transition: left 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }
  }

  &.right {
    &:hover {
      padding: 0.5em 3.5em 0.5em 0.5em;
    }

    &::before {
      transition: 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1), left 0.3s cubic-bezier(0.1, 0, 0.1, 1);
      left: 0;
      right: 100%;
    }

    &::after {
      transition: right 0.3s cubic-bezier(0.1, 0, 0.1, 1);
      left: calc(100% - 3em);
      right: 3em;
    }

    &:hover::before {
      left: calc(100% - 3em);
      right: 0;
      transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1), left 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }

    &:hover::after {
      right: 0;
      transition: right 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    }
  }
}
</style>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'left'
    }
  },
  emits: ['click']
}
</script>
