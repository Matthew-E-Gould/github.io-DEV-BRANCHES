<template>
    <v-sheet :color="sheetColor" class="pa-4">

        <v-sheet :color="sheetColor==='grey-lighten-4'?'grey-lighten-2':'grey'" rounded="pill" class="px-2 mx-1 mb-2">
            <h1>Experience Timeline</h1>
        </v-sheet>
        
        <v-timeline align="start" class="px-2">
            <v-timeline-item v-for="(entry, i) in entries" :key="i" :dot-color="entry.color" size="small">
                <template v-slot:opposite>
                    <div :class="`pt-1 headline font-weight-bold text-${entry.color}`" v-text="entry.year"></div>
                </template>
                <div>
                    <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${entry.color} d-flex ${getFlex(i)}`">
                        {{entry.title}}
                    </h2>
                    <div>
                        {{entry.description}}
                    </div>
                </div>
            </v-timeline-item>
        </v-timeline>
    </v-sheet>
</template>

<script>
import { useExperienceTimelineEntriesStore } from '@/store/experienceTimelineEntries.js'

export default {
    props: ['sheetColor'],
    data: () => ({
        timelineStore: useExperienceTimelineEntriesStore(),
    }),
    computed: {
        entries() {
            return this.timelineStore.entries;
        },
    },
    methods: {
        getFlex(index){
            return (index%2)? 'justify-end':'justify-start';
        }
    }
}
</script>