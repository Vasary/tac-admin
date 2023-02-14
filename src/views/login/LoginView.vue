<template>
  <div>
    <h2>Sign in to your account</h2>
    <p>Please go to the login page a sign in with your personal credentials</p>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

div {
  padding: 40px;

  p {
    color: $info;
    text-align: center;
    padding-top: 20px;
  }

  h2 {
    color: $text-color;
    font-size: 30px;
    text-align: center;
  }
}

</style>

<script>
export default {
  name: 'LoginView',
  components: {}
}
</script>
