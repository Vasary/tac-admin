<template>
  <row container :gutter="12">
    <column :xs="1">
      <div class="call-to-action">
        <IconButton
            icon="trash"
            color="warning"
            @click="$emit('removeAttribute')"
        />
      </div>
    </column>
    <column :xs="3">
      <Select
          id="parent"
          label="Parent"
          :value="parent"
          :options="filterParentAttributes(attributes)"
          @change-value="$emit('update:parent', $event)"
      />
    </column>
    <column :xs="3">
      <Select
          id="attribute-code"
          label="Code"
          :value="id"
          :options="filterAttributes(attributes)"
          @change-value="$emit('update:id', $event)"
      />
    </column>
    <column :xs="5">
      <BaseInput
          id="value"
          label="Value"
          :value="value"
          @input="$emit('update:value', $event.target.value)"
      />
    </column>
  </row>
</template>

<script>
import {Column, Row} from "vue-grid-responsive";
import Select from "./form/BaseSelect";
import BaseInput from "./form/BaseInput";
import IconButton from "./form/IconButton";

export default {
  name: "AttributeValueComponent",
  emits: ['update:parent', 'update:id', 'update:value', 'removeAttribute'],
  components: {
    IconButton,
    Select,
    BaseInput,
    row: Row,
    column: Column,
  },
  props: {
    attributes: Array,
    id: String,
    parent: String,
    value: [String, Boolean, Number],
  },
  methods: {
    filterParentAttributes(attributes) {
      return attributes.filter(attribute => attribute.isParent)
    },
    filterAttributes(attributes) {
      return attributes.filter(attribute => !attribute.isParent)
    }
  }
}
</script>

<style scoped>
.call-to-action {
  text-align: center;
  margin-top: 24px;
}
</style>
