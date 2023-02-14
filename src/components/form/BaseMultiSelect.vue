<template>
  <div class="group">
    <label class="label" :for="id" v-if="label" :class="errors.length > 0 ? 'invalid' : '' ">{{ label }}</label>
    <div class="wrapper">
      <v-select
          :id="id"
          :options="options"
          :clearable="true"
          :reduce="reduce"
          :label="labelOption"
          :model-value="modelValue"
          :multiple="true"
          class="styler"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/_variables.scss";

.multiselect-wrapper {
  padding-top: 16px;
}

.group {
  label {
    color: $text-color;
  }

  .wrapper {
    margin: 4px 0 0;
  }
}

.styler .vs__dropdown-toggle {
  padding: 0 0 3px;
  border-radius: 6px !important;
}
</style>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
  components: {vSelect},
  watch: {
    modelValue(value) {
      this.$emit("update:modelValue", value);
    }
  },
  props: {
    reduce: Function,
    labelOption: String,
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    options: Array,
    label: String,
    errors: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>
