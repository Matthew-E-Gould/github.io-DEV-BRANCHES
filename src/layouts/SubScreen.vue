<template>
    <v-app id="inspire">

        <!-- Top bar -->
        <v-app-bar>
            <v-avatar class="ms-2" color="surface-variant" size="32" variant="flat"></v-avatar>

            <v-app-bar-title>
                Matthew Gould
            </v-app-bar-title>

            <v-spacer></v-spacer>
        </v-app-bar>

        <!-- Bottom bar -->
        <v-footer app color="grey" height="44">

        </v-footer>

        <!-- Left Bar -->
        <v-navigation-drawer floating>
            <v-list>

                <v-list-item v-for="(button, index) in buttons" :key="index">
                    <v-btn variant="text" block :to="button.href">
                        {{ button.title}}
                    </v-btn>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <!-- Main content -->
        <v-main>

            <router-view />

        </v-main>



    </v-app>
</template>
  
<script>
export default {
    name: 'SubScreen',
    props: {},
    data() {
        return {
            buttons: [
                {
                    href: '/',
                    title: 'home',
                    state: 'none',
                },
                {
                    href: '/demos',
                    title: 'demos',
                    state: 'none',
                },
                {
                    href: '/devblog',
                    title: 'Dev Blog',
                    state: 'none',
                },
            ],
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
}
</script>