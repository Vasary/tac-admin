<template>
  <div>
    <AmBreadcrumbs :showCurrentCrumb="true"/>
  </div>
</template>

<style scoped>
.am-breadcrumbs {
  text-transform: uppercase;
}

div {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

<script>
import AmBreadcrumbs from 'vue-3-breadcrumbs/dist/esm/AmBreadcrumbs-04351cc9'

export default {
  name: 'BreadcrumbsComponent',
  components: {
    AmBreadcrumbs
  }
}
</script>
