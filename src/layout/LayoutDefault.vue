<template>
    <HeaderComponent/>
    <BreadcrumbsComponent></BreadcrumbsComponent>

    <div class="page-wrapper">
        <slot/>
    </div>
</template>

<style lang="scss">
@import '../../node_modules/typeface-roboto/index.css';

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
}

.page-wrapper {
  margin-top: 0;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  position: relative;
  padding: 10px;
}

h2, h3 {
  font-weight: 400;
  text-align: center;
}

form {
  padding: 20px;
}

.mt-30 {
  margin-top: 30px;
}

</style>

<script>
import BreadcrumbsComponent from "~/components/BreadcrumbsComponent";
import HeaderComponent from "~/components/HeaderComponent.vue";

export default {
    name: 'LayoutDefault',
    components: {
        HeaderComponent,
        BreadcrumbsComponent,
    }
}
</script>
