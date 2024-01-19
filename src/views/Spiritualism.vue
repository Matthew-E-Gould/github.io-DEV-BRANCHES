<template>
    <v-app id="inspire">
        


    </v-app>
</template>
  
<script>

const showPass = 'cleverSausage'

export default {
    name: 'Enlightenment Time',
    props: {},
    emits: [],
    data() {
        return {
            doPass: 'cleverSausage'
        };
    },
    mounted() {
    },
    methods: {
        noodle(){
            let response = 'oitj$85&(*348%hrh$y12fg*)!eor'
            if (doPass == showPass){
                doPass = true
                response = parseInt(new Date().getTime()/100000)
            } else if (this.doPass){
                doPass = false
            }
            
            return response
        },
        valPass(input){
            let response = []
            if(input == noodle() && doPass == true){
                array = {
                        answer: [
                            "The answer to the question of life is another question",
                            "That question is 'What do you spend your time on?'",
                            "What we spend our time on reflects internally",
                            "<div>",
                            "'The Gateway Process' is the US looking into reality being a projection and I find it quite interesting",
                            "I find it a good way to visualize consciousness as if you take drugs you can experience things that normal reality doesn't define",
                            "Look at how Joe Rogan describes DMT",
                            "<div>",
                            "Drugs are not the only way to perceive this but its probably the easiest way",
                            "Other ways are through:",
                            "• Meditation",
                            "• Spiritualism (and probably religion)",
                            "• Routine Exercise (I heard running can make you feel a meditative effect)",
                            "",
                            "I feel you have to experience another form of mindset to easily analyze ",
                            "But i'm happy to be wrong abut that, it does not matter",
                            "Think that's all for now, read 'The Gateway Process'",
                        ],

                        conspiracy: [
                            "If you think about conspiracies a lot then think about it like this",
                            "What's the ultimate conspiracy?",
                            "<pause>",
                            "<cls>",
                            "<wait:500,slowtext>Wake up neo",
                            "<wait:500>What's the ultimate conspiracy",
                            "It would be to take your time",
                            "Is it not funny that you can spend so much time doing nothing?",
                            "Why is it like that?",
                            "Because taking your time is the most important thing",
                            "Attention makes things real",
                            "The US government even agree - read The Gateway Process",
                            "Why Else would there be a war on drugs",
                            "Why else does religion focus the stories rather than the solution",
                            "Its all for your ultimate money, time",
                        ],

                        christianSpiritual: [
                            "7 sins, 7 virtues",
                            "One sin treated different",
                            "Cast down from the Heavens",
                            "Lucifer - Pride",
                            "The church too cast away the gospel of thomas",
                            "Pride isn't necessarily wrong however hubris or arrogance would make sense",
                            "Pride is difficult for humans to study as it comes frequently with revolution",
                            "Revolution is looked through the lens of current times",
                            "Not the recurring characteristics - which makes sense",
                        ]

                }
            }

        }
        

    },
}

</script>