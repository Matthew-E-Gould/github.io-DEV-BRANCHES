<template>
    <v-app id="inspire">
        <v-main>

            <div> test </div>
            
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
                    subtitle: 'Test stuff here and whatever else',
                    title: 'prologue',
                    date: '20/05/2024',
                    linkUID: 'prologue'
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
