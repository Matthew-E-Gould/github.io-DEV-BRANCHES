// Utilities
import { defineStore } from 'pinia'

export const useHomeListStore = defineStore('homeList', {
    state: () => ({

        rows: [

            //////////////////// Skill set
            {
                title: 'Skills',
                cardWidths: '400',
                cardHeights: '300',
                entries: [
                    {
                        textColor: "#FFF",
                        image: "src/assets/images/skills/dev.jpg",
                        title: "Software Development",
                        confidence: 5,
                        content: [
                            "Passionate for software development and found joy in programming, whether in profession, education or recreation.",
                            "Developed software in his own time towards the end of collage and throughout university.",
                            "While working at Finative, I produced a working product (that was used in internal betas), that was constantly updated with new features, as a project leader for 14 months."
                        ],
                    },
                    {
                        textColor: "#FFF",
                        image: "src/assets/images/skills/remote.jpg",
                        title: "Remote Work",
                        confidence: 4.5,
                        content: [
                            "Let's be honest, everyone has had to get used to working on a remote environment in 2020, for me that started in March when the Alacrity foundation went into lock-down, since then I have also experienced losing teammates, hiring new team, training new team and giving meaningful feedback to teammates.",
                            "As an individual that plays video games, I am comfortable with communicating concisely in many varieties over the internet.",
                            "I am also very comfortable with working in-person."
                        ],
                    },
                    {
                        textColor: "#FFF",
                        image: "src/assets/images/skills/security.jpg",
                        title: "Software Security",
                        confidence: 3.5,
                        content: [
                            "Had training on secure systems concepts during formal years at University.",
                            "Moved on to apply the learnt concepts to personal and professional projects through use of middleware, policies and input validation to assure that systems were secure.",
                            "I am looking into cryptology at a further level so that improved decisions can be made about when, where & how to use cryptography in the future.",
                        ],
                    },
                    {
                        textColor: "#FFF",
                        image: "src/assets/images/skills/printer.jpg",
                        title: "CAD & 3D Printing",
                        confidence: 3,
                        content: [
                            "Trained in engineering for 4 years and can use CAD software to follow engineering specifications.",
                            "Owns a 3D printer and has learnt to work with slicing tools to improve the quality of models.",
                            "Can improve production time and improve quality of post print builds by using different scaffolding structures and hardware.",
                        ],
                    },
                    /*
                    {
                        textColor: "#000",
                        image: "src/assets/images/skills/printer.jpg",
                        title: "Piano & Music",
                        confidence: 1,
                        content: [
                            "Learning the piano for basic music composition in video games",
                            "Appreciates the works of Beethoven,  and Debussy",
                            "Experience with midi controllers and connected computer systems",
                        ],
                    },
                    */
                ],
            },

            //////////////////// Previous Positions & Projects
            {
                title: 'Previous Positions & Projects',
                titleBtn: 'Previous Work',
                cardWidths: '215',
                cardHeights: '200',
                entries: [
                    {
                        textColor: "#000",
                        image: "src/assets/images/work/haelu.jpg",
                        title: "Haelu",
                        link: "https://haelu.co.uk/",
                        subtitle: "Health platform to help track post-hospital recuperation of patients",
                        content: [
                            "Helped Haelu architect and build a new product from the ground up",
                            "Aided in training new staff for their product development",
                            "Attended regular meetings about the products development and progress",
                        ],
                    },
                    {
                        textColor: "#F00",
                        image: "src/assets/images/work/initia.jpg",
                        title: "Initia",
                        subtitle: "HR platform to help companies track the security clearing process of new employees",
                        content: [
                            "Helped Initia develop their product ready for a state of release",
                            "Implemented updated components that follow DRY principles",
                        ],
                    },
                    {
                        textColor: "#000",
                        image: "",
                        title: "myCrypting",
                        link: "https://www.mycrypting.com/",
                        subtitle: "Accounting platform to help track assets bought on coinbase",
                        content: [
                            "Developed clear statistical analysis of the cryptocurrencies that people were holding on coinbase",
                            "Clear instructions on how to populate the site with data",
                            "Serverless architecture",
                            "I would have liked to develop the platform to work with multiple exchanges",
                        ],
                    },
                    {
                        textColor: "#F58641",
                        image: "src/assets/images/work/recovar.jpg",
                        title: "RECOVAR",
                        subtitle: "Software to assist with the decommission of old equipment at sites",
                        content: [
                            "Attended key stakeholder meetings",
                            "Attended board meetings",
                            "Developed a website and mobile application that would work in tandem to aid in the decommissioning process",
                            "Data-mined the locations of decommissioning sites for key stakeholder",
                        ],
                    },
                    {
                        textColor: "#000",
                        image: "",
                        title: "Web trawler",
                        link: "https://github.com/Matthew-E-Gould/Keyword_based_webcrawler",
                        subtitle: "Input keyword(s) you're looking for and a starting site and find linked pages that contained those keyword(s)",
                        content: [
                            "Developed a solution that would work on both the dark web and clear web",
                            "Would return data on what web pages were linked together and which web pages had your desired keyword(s)",
                            "Would have liked to have built out an responsive UI that would allow you to better visualise the data",
                        ],
                    },
                    {
                        textColor: "#000",
                        image: "src/assets/images/work/intuitix.jpg",
                        title: "Intuitix",
                        link: "https://intuitix.co/",
                        subtitle: "Innovation management platform for large companies",
                        content: [
                            "Implemented site polling so that users were kept up to date",
                            "Developed multi-threaded processes to reduce data analysis times",
                            "Code optimisation",
                        ],
                    },
                    {
                        textColor: "#000",
                        image: "src/assets/images/work/finative.jpg",
                        title: "Finative",
                        subtitle: "Client portal for brokerages",
                        content: [],
                    },
                    {
                        textColor: "#000",
                        image: "",
                        title: "Dice Game",
                        subtitle: "2019 summer project",
                        content: [
                            "Implemented use of polymorphism to give dice different characteristics with minimal code",
                            "Implemented an inventory system so players could keep their dice",
                            "Implemented a saving and loading system so that users could resume their game",
                            "Implemented Virtual Intelligence that would make different enemies play differently",
                            "I would have like to of developed a user interface that users could interact with",
                        ],
                    },
                    {
                        textColor: "#000",
                        image: "",
                        title: "Smart Home Alarm",
                        subtitle: "Masters Dissertation",
                        content: [
                            "Implemented a system on the raspberry pi",
                            "Recognition of faces so that the system could determine if people were meant to be there",
                            "Developed biometric system that would allow for users to see information about a person if they wanted to file a report",
                        ],
                    },
                    {
                        textColor: "#000",
                        image: "",
                        title: "Minesweeper",
                        subtitle: "2018 summer project",
                        link: "https://github.com/Matthew-E-Gould/MultiSweeper",
                        content: [
                            "Built in python",
                            "Developed to work on on multiple platforms",
                            "Would have liked to implement a turn-based multiplayer system",
                        ],
                    },
                ],
            },

            //////////////////// Education
            {
                title: 'Education',
                cardWidths: '200',
                cardHeights: '200',
                entries: [
                    {
                        textColor: "#000",
                        image: "src/assets/images/edu/alacrity.jpg",
                        title: "Alacrity",
                        dialogTitle: "The Alacrity foundation",
                        subtitle: "2019 - 2021",
                        link: "https://alacrityfoundation.co.uk/",
                        content: [
                            "Technical lead",
                            "Incubator that helped post-grads make their way to entrepreneurship",
                            "Worked with co-founders to start 2 companies",
                            "Runner up for rising star in the welsh start up awards",
                            "Presented ideas to the foundation and to teams",
                            "Helped other teams with issues",
                            "Helped other 'students' during the bootcamp",
                            "1st company, Finative, did not receive seed investment because I was the only founder left",
                            "2nd company, RECOVAR, declined seed funding because we felt that our issue was that our first customer, whom helped us develop the product had no intentions of buying it",
                            "Technical lead for both Finative and RECOVAR",
                        ],
                    },
                    {
                        textColor: "#0FF",
                        image: "src/assets/images/edu/usw.jpg",
                        title: "USW",
                        dialogTitle: "University of South Wales",
                        link: "https://www.southwales.ac.uk/",
                        subtitle: "2015 - 2019",
                        content: [
                            "During collage I found a fondness towards software development so I decided to study computer science during university.",
                            "Bsc - 2:1",
                            "Masters - 1st"
                        ],
                    },
                    {
                        textColor: "#000",
                        image: "src/assets/images/edu/bte.jpg",
                        title: "BTE",
                        dialogTitle: "Bristol Technology and Engineering Academy",
                        subtitle: "2013 - 2015",
                        content: [
                            "Went to an engineering collage for A-levels and to further my studies in engineering.",
                            "Studied, Engineering, Physics and Maths",
                        ],
                    },
                    {
                        textColor: "#000",
                        image: "src/assets/images/edu/rgs.jpg",
                        title: "RGS",
                        dialogTitle: "Redland Green School",
                        subtitle: "2008 - 2013",
                        link: "https://www.redlandgreen.bristol.sch.uk/",
                        content: [
                            "Going to school I discovered interests in computers and engineering, however a course was not available around computers at GCSE.",
                            "9 GCSEs graded A* - C",
                        ],
                    },
                ],
            },

            //////////////////// Hobbies
            {
                title: 'Hobbies',
                cardWidths: '300',
                cardHeights: '200',
                entries: [
                    {
                        textColor: "#FFF",
                        image: "src/assets/images/skills/dev.jpg",
                        title: "Software Development",
                        content: [],
                    },
                    {
                        textColor: "#F0F",
                        image: "src/assets/images/hobbies/motorbike.jpg",
                        title: "Motorbiking",
                        content: [],
                    },
                    {
                        textColor: "#FFF",
                        image: "src/assets/images/hobbies/telescope.jpg",
                        title: "Astronomy",
                        content: [],
                    },
                    {
                        textColor: "#FFF",
                        image: "src/assets/images/hobbies/game.jpg",
                        title: "Video Gaming",
                        content: [],
                    },
                ],
            },

        ],
    }),

    actions: {

    },
    getters: {

    },

})
