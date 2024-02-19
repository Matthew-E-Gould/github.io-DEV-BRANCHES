<template>
    <v-app id="inspire">
        <v-main>

            <div>
                <v-row>
                    <v-col v-for="entry in visibleItems" xs="12" sm="6" md="4" lg="3" xl="2">
                        <BlogEntry :item="entry" />
                    </v-col>
                </v-row>
                <v-row>

                    <v-col xs="12" sm="12" md="6">
                        <v-pagination :length="pages" v-model="currentPage" />
                    </v-col>

                    <v-spacer></v-spacer>

                    <v-col xs="12" sm="12" md="6">
                        <v-select label="Items Per Page" :items="itemsPerPageOptions" v-model="itemsPerPage" />
                    </v-col>

                </v-row>
            </div>
            
        </v-main>
    </v-app>
</template>

<script>
import BlogEntry from '@/components/blog/BlogEntry.vue';

export default {
    name: 'DevBlog',
    props: {
    },
    data() {
        return {
            items: [
                {
                    img: 'https://www.disneyfanatic.com/wp-content/uploads/2021/03/goofy.jpg',
                    subtitle: 'subtitle',
                    title: 'title',
                    date: 'date',
                    linkUID: 'test123'
                },
                {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            itemsPerPage: 20,
            itemsPerPageOptions: [10, 20, 40],
            currentPage: 1,
        };
    },
    mounted() {
    },
    methods: {
        template() {

        },
    },
    computed: {
        pages() {
            return (this.items.length <= 0) ? 0 : Math.ceil(this.items.length / this.itemsPerPage)
        },

        visibleItems() {
            return this.items.slice([(this.currentPage - 1) * this.itemsPerPage], [this.currentPage * this.itemsPerPage])
        }
    },
    watch: {
        itemsPerPage(newVal, oldVal) {
            this.currentPage = 1
        },
    },
    components: { BlogEntry }
}
</script>
