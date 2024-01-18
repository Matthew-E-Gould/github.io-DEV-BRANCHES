<template>
    
    <sub-screen v-if="subScreenMode"/>
    <router-view v-else/>
    
</template>

<script>
import SubScreen from './layouts/SubScreen.vue';

export default {
    name: 'App',
    props: {},
    data() {
        return {
            subScreenMode: true,
        };
    },
    mounted() {

    },
    methods: {
        template() {

        },

    },
    computed: {
        template() {

        },
    },
    watch: {
        template(newVal, oldVal) { },
    },
    components: { SubScreen }
}
</script>
