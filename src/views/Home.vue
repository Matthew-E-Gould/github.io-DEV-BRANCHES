<template>
    <v-app id="inspire">

        <!-- Main content -->
        <v-main>

            <!-- skills, previous positions, education, hobbies -->
            <v-sheet v-for="(row, index) in rows" :key="index" class="mx-auto pa-2 pt-6"
                :color="(index % 2) ? 'grey-lighten-2' : 'grey-lighten-4'">

                <v-sheet :color="(index % 2) ? 'grey' : 'grey-lighten-2'" rounded="pill" class="px-2 mx-1 mb-2"
                    :id="row.title">{{ `${row.title} (${row.entries.length} items)` }}</v-sheet>

                <v-slide-group show-arrows>
                    <GenericItemCard v-for="entry in row.entries" :key="entry.title" :entry="entry" :row="row"
                        @custom-click="entryClicked" />
                </v-slide-group>

            </v-sheet>

            <WorkTimeline class="my-4"/>

        </v-main>

        <!-- Popup -->
        <v-dialog v-model="currentDialog" width="720">
            <v-card>

                <v-card-title>
                    {{ currentDialog.dialogTitle != undefined ? currentDialog.dialogTitle : currentDialog.title }}
                </v-card-title>

                <v-card-subtitle v-if="currentDialog.subtitle != undefined">
                    {{ currentDialog.subtitle }}
                </v-card-subtitle>

                <v-btn v-if="currentDialog.link != undefined" variant="text" @click="linkClicked(currentDialog.link)"
                    append-icon="mdi-open-in-new" class="mt-4">
                    {{ currentDialog.link }}
                </v-btn>

                <v-card-title v-if="currentDialog.confidence != undefined">
                    Confidence: <v-icon v-for="n in 5" :icon="getStar(n, currentDialog.confidence)" />
                </v-card-title>

                <v-divider />

                <v-card-text>
                    <v-list lines="two">
                        <v-list-item v-for="(entry, index) in currentDialog.content" :key="index" prepend-icon="mdi-circle">
                            {{ entry }}
                        </v-list-item>
                    </v-list>
                </v-card-text>

                <v-divider />
                <v-btn variant="text" @click="closeDialogue()">
                    Close
                </v-btn>

            </v-card>
        </v-dialog>

    </v-app>
</template>
  
<script>
import GenericItemCard from '@/components/GenericItemCard.vue';
import WorkTimeline from '@/components/WorkTimeline.vue';
import { useHomeListStore, } from '@/store/homeList.js'

export default {
    name: 'Home',
    props: {},
    emits: [],
    data() {
        return {
            currentDialog: null,
            homeListStore: useHomeListStore(),
        };
    },
    mounted() {
    },
    methods: {
        decide(entries = [true, false], index = -1) {
            let output = null;
            if (index === -1) {
                output = entries[this.getRndInteger(0, entries.length)];
            }
            else {
                output = entries[index % entries.length + 1];
            }
            return output;
        },
        getRndInteger(min = 0, max = 1) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        entryClicked(entry) {
            this.currentDialog = entry;
        },
        closeDialogue() {
            this.currentDialog = false;
        },
        getStar(index, confidence) {
            let overflow = confidence - (index - 1);
            let icon = 'mdi-';
            if (overflow >= 1) {
                icon += 'star';
            }
            else if (overflow > 0) {
                icon += 'star-half-full';
            }
            else {
                icon += 'star-outline';
            }
            return icon;
        },
        linkClicked(url) {
            window.open(url, '_blank').focus();
        },
        scrollToRow(row) {
            document.getElementById(row.title).scrollIntoView()
        },

    },
    computed: {
        rows() {
            return this.homeListStore.rows;
        },
    },
    watch: {
        template(newVal, oldVal) { },
    },
    components: { GenericItemCard, WorkTimeline }
}

</script>