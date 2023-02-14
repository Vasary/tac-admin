<template>
  <row container :gutter="12">
    <column :xs="12">
      <BaseInput
          id="name"
          label="Category name"
          :value="categoryName"
          @input="$emit('update:categoryName', $event.target.value)"
      />
    </column>
  </row>
</template>

<script>
import BaseInput from "./BaseInput";
import {Column, Row} from 'vue-grid-responsive';

export default {
  name: 'CategoryForm',
  emits: ['update:categoryName'],
  components: {
    BaseInput,
    row: Row,
    column: Column,
  },
  props: {
    categoryName: {
      required: false
    }
  }
}
</script>

<style scoped></style>


