<template>
    <LoaderComponent :visible="loading"/>
    <Layout>
        <router-view/>
    </Layout>
    <Toasts/>
</template>

<style>
*, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

html {
    box-sizing: border-box;
}

</style>

<script>
import Layout from "./layout/LayoutDefault";
import LoaderComponent from "./components/LoaderComponent";
import {mapState} from "vuex";
import Toasts from "./components/toast/ToastsWrapper";

export default {
    computed: {
        ...mapState({
            loading: (state) => state.loader.loading,
        }),
    },
    components: {
        Toasts,
        Layout,
        LoaderComponent
    }
}
</script>
