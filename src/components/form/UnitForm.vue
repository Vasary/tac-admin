<template>
  <row container :gutter="12">
    <column :xs="12" :md="4">
      <BaseInput
          id="name"
          label="Name"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
      />
    </column>
    <column :xs="12" :md="2">
      <BaseInput
          id="alias"
          label="Alias"
          :value="alias"
          @input="$emit('update:alias', $event.target.value)"
      />
    </column>
    <column :xs="12" :md="6">
      <TagsInput
          id="suggestions"
          label="Value suggestions"
          :model-value="suggestions"
          @tags-changed="$emit('update:suggestions', $event)"
      />
    </column>
  </row>
</template>

<script>
import BaseInput from "./BaseInput";
import TagsInput from "./TagsInput/TagsInput";
import {Column, Row} from 'vue-grid-responsive';

export default {
  name: 'UnitForm',
  emits: ['update:name', 'update:alias', 'update:suggestions'],
  components: {
    BaseInput,
    TagsInput,
    row: Row,
    column: Column,
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    alias: {
      required: true,
      type: String,
    },
    suggestions: {
      required: true,
      type: Array,
    },
  }
}
</script>

<style scoped></style>
