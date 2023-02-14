<template>
  <div class="group">
    <label class="label" :for="id" v-if="label">{{ label }}</label>
    <div class="toggle-wrapper">
      <Toggle
          :id="id"
          :model-value="value"
          @change="$emit('changeValue', $event)"
      />
    </div>
  </div>
</template>

<script>
import Toggle from '@vueform/toggle'

export default {
  components: {
    Toggle,
  },
  emits: ['changeValue'],
  props: {
    id: {
      type: String,
      default: "",
    },
    value: {
      required: true,
    },
    label: String
  },
}
</script>

<style scoped lang="scss">

@import "src/assets/scss/_variables.scss";
@import "@vueform/toggle/themes/default.css";

.group {
  text-align: center;

  label {
    color: $text-color;
  }

  .toggle-wrapper {
    margin-top: 8px;
  }
}

</style>
