<template>

</template>

<script>


export default {
    name: 'BlogRenderer',
    props: {
        blog: {
            required: true,
            default: [],
        },
        spacing: {
            required: false,
            default: '16px'
        },
        preloaded: {
            required: false,
            default: true,
        }
    },
    data() {
        return {

        };
    },
    mounted() {
        // let linkUID = window.location.pathname.split("")[1]
        // search for blog uid via linkUID
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
        template(newVal, oldVal) {

        },
    },
    components: {  }
}
</script>
