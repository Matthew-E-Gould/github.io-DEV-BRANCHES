<template>
    <v-slide-group-item >
        <v-card class="mx-1 my-1" :color="randomHSLA()" @click="$emit('custom-click', entry)">
            <v-img cover :src="entry.image" class="align-end" :width="row.cardWidths" :height="row.cardHeights">
                <v-card-title :style="`color: ${entry.textColor};`">{{ entry.title }}</v-card-title>
            </v-img>
        </v-card>
    </v-slide-group-item>
</template>

<script>

export default {
    name: 'GenericItemCard',
    props: ['entry', 'row'],
    emits: ['custom-click'],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        randomHSLA() {
            if(this.entry.image) return `#FFF`;
            else return `hsla(${(360 * Math.random())}, 70%,  72%, 0.8)`;
        }
    },
    computed: {
    },
    watch: {
        template(newVal, oldVal) { },
    },

}

</script>
