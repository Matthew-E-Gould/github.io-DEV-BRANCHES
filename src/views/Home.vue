<template>
    <v-app id="inspire">

        <!-- main -->
        <v-main>

            <!-- about me -->
            <v-sheet color="grey-lighten-2" class="pa-4">
                <v-sheet color="grey" rounded="pill" class="px-2 mx-1 mb-2">
                    <h1>Matthew Gould</h1>
                </v-sheet>
                <p class="pl-2">
                    Welcome to my digital space! I'm a Computer Science master's graduate with a penchant for
                    blazing trails in the tech world. Two startup ventures might not have panned out, but they've been my
                    greatest teachers, fueling my appetite for risk and challenge.
                </p>
                <p class="pl-2">
                    I thrive in the world of code, leading from the front with hands-on experience in steering
                    development teams. From freelancing adventures to personal coding projects, I don't just embrace
                    challenges — I code them into elegant solutions.
                </p>
                <p class="pl-2">
                    My journey began in a non-traditional way; I Started in the realms of engineering and 3D
                    printing, combining creativity and technical finesse. Each project is a canvas, and I'm here to paint a
                    better future.
                </p>
                <p class="pl-2">
                    Whether you're a fellow enthusiast, a potential collaborator, or someone seeking a unique
                    perspective in the tech realm, let's connect and explore the endless possibilities together.
                </p>
                <p class="pl-2 pt-4">
                    <b><u>TL;DR:</u></b> Unstoppable techie with a Master's in Computer Science, that has a
                    wide variety of skills in a tight-nit field of subjects. I will not stop learning and becoming the best
                    version of myself that I can. I am quickly learning that failure does breed greatness.
                </p>
            </v-sheet>

            <!-- skills, previous positions, education, hobbies -->
            <v-sheet v-for="(row, index) in rows" :key="index" class="mx-auto pa-2 pt-6"
                :color="(index % 2) ? 'grey-lighten-2' : 'grey-lighten-4'">

                <v-sheet :color="(index % 2) ? 'grey' : 'grey-lighten-2'" rounded="pill" class="px-2 mx-1 mb-2" :id="row.title">
                    {{ `${row.title} (${row.entries.length} items)` }}
                </v-sheet>

                <v-slide-group show-arrows>
                    <GenericItemCard v-for="entry in row.entries" :key="entry.title" :entry="entry" :row="row"
                        @custom-click="entryClicked" />
                </v-slide-group>

            </v-sheet>

            <!-- work timeline -->
            <WorkTimeline :sheetColor="'grey-lighten-4'" />

            <!-- what im doing now -->
            <v-sheet color="grey-lighten-2" class="pa-4 pb-16">
                <v-sheet color="grey" rounded="pill" class="px-2 mx-1 mb-2">
                    <h1>What I'm doing right now</h1>
                </v-sheet>
                <div class="pl-2">

                    <h2>Games Development:</h2>
                    <p>
                        I am currently working on games development in Godot, I have made a few demo games and built out a game design document.
                        I want to develop one of my projects into a fully fledged game with an original story and design elements.
                    </p>

                    <h2>Self Development:</h2>
                    <p>
                        I am working on this website.
                        Upcoming features include a dev-blog, an ARG experience, and continual improvements to the UI to be mobile friendly.
                    </p>

                    <h2>Network Architecture:</h2>
                    <p>
                        I am working on improving my local networks security and functionality for computer security, hobbies and experimenting with network traffic analysis.
                    </p>

                </div>
            </v-sheet>

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
            if (index === -1) { // get random value if index === -1
                output = entries[this.getRndInteger(0, entries.length)];
            }
            else {
                output = entries[index % entries.length + 1]; // odd way of getting index, right?
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

<style scoped>
.lightBackground {
    background-color: #F5F5F5;
}
</style>