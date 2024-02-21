// Utilities
import { defineStore } from 'pinia'

export const useExperienceTimelineEntriesStore = defineStore('experienceTimelineEntries', {
    state: () => ({

        entries: [
            {
                color: 'green',
                year: '2019',
                title: 'USW Graduation',
                description: 'Graduated With a First Masters In Computer Sciences',
            },
            {
                color: 'green',
                year: '',
                title: 'Started at Alacrity',
                description: "Alacrity provides graduates with 'demand-lead businesses' provided by strategic partners. Graduates then develop teams and then work to solutions in hopes of developing Software As A Service (saas) products",
            },
            {
                color: 'green',
                year: '',
                title: 'Co-Founded Finative',
                description: 'Co-founded with 4 other people, I took the Role as Sole software Developer for the team',
            },
            {
                color: 'amber',
                year: '2020',
                title: 'Moved to a Remote Work-Style',
                description: 'During the pandemic I worked with teammates and employees to develop and deliver features that were outlined in our product specs',
            },
            {
                color: 'amber',
                year: '2021',
                title: 'Finative Undergoes Structural Changes',
                description: 'We had lost 2 of our co-founders but we able to secure a grant from Alacrity to hire 2 developers.',
            },
            {
                color: 'red',
                year: '2021',
                title: 'Finative Closes',
                description: 'I was the last founder of Finative, since I had been handling the development team and had not built a relationship with our target clients I deemed that it would be best to close the company as there was little runway left',
            },
            {
                color: 'blue',
                year: '2021',
                title: 'Restarted Doing Freelance Work',
                description: '',
            },
            {
                color: 'green',
                year: '',
                title: 'Joined RECOVAR as a late Co-Founder',
                description: 'Joined a team of 3 people, in this team I was lead developer alongside 2 other developers',
            },
            {
                color: 'blue',
                year: '',
                title: 'RECOVAR Declines Seed Funding Valuating it at £500K',
                description: '',
            },
            {
                color: 'red',
                year: '',
                title: 'RECOVAR Closes',
                description: 'Due to complications around what our strategic partner wanted and understood about the development of the product, we deemed it best to close RECOVAR as personal finances started to run dry for all founders.',
            },
            {
                color: 'blue',
                year: '',
                title: 'Another Return to Freelance Work',
                description: '',
            },
            {
                color: 'green',
                year: '2023',
                title: 'Worked as a senior developer at Haelu',
                description: '',
            },
            {
                color: 'blue',
                year: '',
                title: 'Started Doing Games Dev Projects in Godot',
                description: '',
            },
            {
                color: 'blue',
                year: '',
                title: 'Redesigned CV Site',
                description: 'A complete UI overhaul including making the entire site an SPA running in the newest Vuetify version.',
            },
            {
                color: 'blue',
                year: '2024',
                title: 'Expanded my Understanding of Games Development',
                description: 'By understanding and producing the admin of the discipline like, games briefs and specs, I further my understanding of games development and project management.',
            },
        ],
    }),

    actions: {

    },
    getters: {

    },

})
