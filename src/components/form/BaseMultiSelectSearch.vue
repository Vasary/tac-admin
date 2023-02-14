<template>
  <div class="group">
    <label class="label" :for="id" v-if="label">{{ label }}</label>
    <Multiselect
        class="styler"
        placeholder="Choose"
        :min-chars="minChars"
        :delay=0
        :mode="mode"
        :value="value"
        :resolve-on-load="false"
        :searchable="true"
        @change="$emit('changeValue', $event)"
        :options="async function(query) {
          return await fetcher(query)
        }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";
@import "@vueform/multiselect/themes/default.css";

.group {
  label {
    color: $text-color;
  }

  .styler {
    margin: 4px 0 0;

    --ms-radius: 6px;
    --ms-border-color: #d1d5db;
    --ms-py: 6px;
    --ms-option-font-size: 14px;
    --ms-font-size: 14px;
    --ms-max-height: 12rem;
    --ms-option-bg-selected: #cecd24;
    --ms-dropdown-border-color: #6466f1;
    --ms-tag-bg: #cecd24;
    --ms-tag-font-size: 12px;
    --ms-tag-color: #374151;
    --ms-tag-font-weight: normal;

    &.is-active {
      box-shadow: none;
      border-color: $primary;
    }
  }
}
</style>

<script>
import Multiselect from '@vueform/multiselect'

export default {
  components: {Multiselect},
  emits: ['changeValue'],
  props: {
    id: {
      type: String,
      default: "",
    },
    value: {
      required: true,
    },
    minChars: {
      type: Number,
      required: true,
    },
    label: String,
    mode: {
      type: String,
      default: 'single'
    },

    fetcher: {
      type: Function,
      required: true,
    }
  }
}
</script>
