<template>
  <div class="toasts-wrapper" v-if="toasts.length">
    <Toast
        v-for="(toast, index) of toasts"
        :toast="toast"
        :key="index">
    </Toast>
  </div>
</template>

<script>
import Toast from './ToastPopup.vue'
import {mapState} from "vuex";

export default {
  name: 'ToastsWrapper',
  components: {Toast},
  computed: {
    ...mapState('toast', ['toasts'])
  }
}
</script>

<style>
.toasts-wrapper {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 1rem;
  top: 1rem;
}
</style>
