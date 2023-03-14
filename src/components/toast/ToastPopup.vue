<template>
  <div class="toast">
    <div class="body">
      <div class="icon" :class="toast.type"></div>
      <div class="message">
        <div class="title">{{ toast.title }}</div>
        <div class="body">{{ toast.message }}</div>
        <div class="constraints" v-if="toast.constraints">
          <div v-for="constraint in toast.constraints" :key="constraint.id">
            <span class="constraint">{{ constraint.property }}: {{ constraint.message }}</span>
          </div>
        </div>

        <div class="actions">
          <div class="edit" v-if="toast.redirect">
            <router-link
                :to="{ name: toast.redirect.route, params: toast.redirect.params }"
            >{{ toast.redirect.name }}
            </router-link>
          </div>
          <div class="dismiss" @click="dismissToast"><a href="#">Dismiss</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToastPopup',
  props: {
    toast: {
      required: true,
      type: Object
    }
  },
  created() {
    setTimeout(() => this.dismissToast(), 8000);
  },
  methods: {
    dismissToast() {
      this.$store.commit('toast/clear', this.toast.id);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";
@import "src/assets/scss/_icons.scss";

.toast {
  border: 1px solid #e6e7e9;
  border-radius: 8px;
  background: white;
  padding: 10px 30px 10px 10px;
  font-size: 12px;
  min-width: 300px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);

  .body {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;

    .icon {
      border-radius: 50%;
      border: none;
      background-size: 100%;
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;

      &.error {
        background-image: get-icon('cross', $error);
      }

      &.success {
        background-image: get-icon('check', $secondary);
      }
      &.info {
        background-image: get-icon('check', $info);
      }
    }

    .message {
      padding-left: 10px;
      margin-top: 4px;
      width: 100%;

      .constraints {
        color: #6b7280;
        font-size: 13px;
        margin-top: 10px;
      }

      .title {
        font-weight: 500;
        font-size: 14px;
        color: $text-color;
      }

      .body {
        font-size: 13px;
        color: #6b7280;
        margin-top: 8px;
      }

      .actions {
        font-size: 13px;
        margin-top: 16px;
        font-weight: 500;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;

        a {
          text-decoration: none;
        }

        div.edit {
          a, a:visited, a:active, a:hover {
            color: $primary;
          }
        }

        div.dismiss {
          a {
            color: $text-color;
          }
        }
      }
    }
  }
}
</style>
