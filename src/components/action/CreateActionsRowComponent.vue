<template>
  <row container :gutter="12">
    <column :xs="12">
      <div class="call-to-action-wrapper">
        <div>
          <BaseButton
              icon="cross"
              type="button"
              route="attributes"
              color="warning"
              @click="$emit('cancel')"
          >Cancel
          </BaseButton>
        </div>
        <div class="reset">
          <BaseButton
              icon="update"
              type="button"
              color="secondary"
              @click="$emit('reset')"
          >Reset
          </BaseButton>
        </div>
        <div class="submit-button">
          <BaseButton
              direction="right"
              icon="arrow"
              type="submit"
              color="primary"
          >Create
          </BaseButton>
        </div>
      </div>
    </column>
  </row>
</template>

<script>
import {Column, Row} from 'vue-grid-responsive';
import BaseButton from "../form/BaseButton";

export default {
  name: "CreateActionsRowComponent",
  components: {
    BaseButton,
    row: Row,
    column: Column,
  }
}
</script>

<style scoped>
.call-to-action-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.call-to-action-wrapper > div {
  margin-left: 20px;
}

</style>