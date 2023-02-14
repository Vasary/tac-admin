<template>
  <row container :gutter="12">
    <column :xs="12" :md="6" :lg="6">
      <BaseInput
          id="code"
          label="Code name"
          :readonly="codeReadonly"
          :value="code"
          @input="$emit('update:code', $event.target.value)"
      />
    </column>
    <column :xs="12" :md="6" :lg="6">
      <Select
          id="type"
          label="Type"
          :options="types"
          :value="type"
          @change-value="$emit('update:type', $event)"
      />
    </column>
  </row>
  <row container :gutter="12">
    <column :xs="12" :md="6" :lg="6">
      <BaseInput
          id="name"
          label="Name"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
      />
    </column>
  </row>
  <row container :gutter="12">
    <column :xs="12" :md="12" :lg="12">
      <BaseInput
          id="description"
          label="Description"
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
  name: 'AttributeForm',
  emits: ['update:code', 'update:type', 'update:name', 'update:description'],
  components: {
    Select,
    BaseInput,
    row: Row,
    column: Column,
  },
  props: {
    code: String,
    type: String,
    name: String,
    description: String,
    codeReadonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      types: [
        {label: 'Array', value: 'array'},
        {label: 'String', value: 'string'},
        {label: 'Integer', value: 'integer'},
        {label: 'Boolean', value: 'boolean'},
        {label: 'Float', value: 'float'},
      ],
    }
  },
}
</script>

<style scoped></style>


