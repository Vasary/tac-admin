<template>
  <row container :gutter="12">
    <column :xs="12" :md="5" :lg="5">
      <BaseInput
          id="name"
          label="Product name"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
      />
    </column>
    <column :xs="12" :md="4" :lg="4">
      <Select
          id="category"
          label="Category name"
          :value="category"
          :options="categories"
          @change-value="$emit('update:category', $event)"
      />
    </column>
    <column :xs="12" :md="3" :lg="3">
      <Select
          id="units"
          label="Units"
          mode="tags"
          :value="unit"
          :options="units"
          @change-value="$emit('update:unit', $event)"
      />
    </column>
  </row>
  <row container :gutter="12">
    <column :xs="12" :md="12" :lg="12">
      <BaseInput
          id="description"
          label="Product description"
          :value="description"
          @input="$emit('update:description', $event.target.value)"
      />
    </column>
  </row>
</template>

<script>
import BaseInput from "./BaseInput";
import Select from "./BaseSelect";
import {Column, Row} from 'vue-grid-responsive';

export default {
  name: "ProductForm",
  emits: ['update:name', 'update:category', 'update:unit', 'update:description'],
  components: {
    BaseInput,
    Select,
    row: Row,
    column: Column,
  },
  props: {
    name: String,
    description: String,
    category: String,
    categories: Array,
    unit: Array,
    units: Array,
  }
}
</script>

<style scoped>

</style>
