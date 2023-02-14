<template>
  <div class="group" :class="{'invalid': errors.length > 0}">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
        :type="type"
        :id="id"
        :maxlength="length"
        :readonly="readonly"
        :value="value"
    />
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";

.group {
  label {
    color: $text-color;
  }

  input {
    margin: 4px 0 0;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid $border-color;
    width: 100%;
    transition: 0.3s;

    &:focus {
      border-color: $primary;
      outline: none;
    }

    &:read-only {
      background: $border-color;
      outline: none;
    }
  }

  &.invalid {
    label {
      color: $error;
    }

    input {
      border-color: $error;
    }
  }
}

</style>

<script>
export default {
  name: 'BaseInput',
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number, Boolean],
      default: "",
    },
    length: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    errors: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>
