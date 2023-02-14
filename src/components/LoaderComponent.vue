<template>
  <loading :active="visible"></loading>
</template>

<script>
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default {
  name: 'LoaderComponent',
  components: {
    Loading
  },
  props: {
    visible: Boolean
  }
};

</script>

<style></style>
