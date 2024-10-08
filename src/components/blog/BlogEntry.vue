<template>
    <v-card border flat class="pb-3 mt-3">

        <v-img :src="item.img" />

        <v-list-item class="mb-2" :subtitle="item.subtitle">
            <template v-slot:title>
                <strong class="text-h6 mb-2">{{ item.title }}</strong>
            </template>
        </v-list-item>

        <div class="d-flex justify-space-between px-4">
            <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                <v-icon icon="mdi-calendar-month" start />
                <div class="text-truncate">{{ item.date }}</div>
            </div>
            <v-btn border flat size="small" class="text-none" text="Read" @click="click" :disabled="!this.item.linkUID" />
        </div>

    </v-card>
</template>

<script>
export default {
    name: 'BlogEntry',
    props: {
        item : {
            required: true
            // needs to have: img, subtitle, title, date, linkUID (for link)
        }
    },
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {
        click() {
            if(this.item.linkUID == undefined){
                console.error('missing linkUID')
            }else{
                this.$router.push({ 
                    path: `${window.location.pathname}/blog/${this.item.linkUID}`,
                })
            }
            
        },
    },
    computed: {
        template(){

        },
    },
    watch: {
        template(newVal, oldVal) {

        },
    },
}
</script>