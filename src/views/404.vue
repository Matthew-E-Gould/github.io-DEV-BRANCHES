<template>
    <v-app id="inspire" style="background-color:#000000;">

        <div id="notfound">
            <div class="notfound">
                <div class="notfound-title row">
                    <h1>404</h1>
                </div>
                <h1 style="color:#ff7518;">Page not found</h1>
                <v-btn text @click="backPage()" class="mt-6">
                    Go back a page
                </v-btn>
            </div>
        </div>

    </v-app>
</template>
  
<script>
export default {
    name: '404',
    props: {},
    data() {
        return {}
    },
    mounted() {
    },
    methods: {
        backPage() {
            this.$router.go(-1)
        },
    },
    computed: {
        template() { },
    },
    watch: {
        template(newVal, oldVal) { },
    },

}
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.notfound {
  max-width: 410px;
  width: 100%;
  text-align: center;
}

.notfound .notfound-title {
  height: 280px;
  position: relative;
  z-index: -1;
}

.notfound .notfound-title h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 230px;
  margin: 0px;
  font-weight: 900;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
  background: url('src/assets/images/404.jpg') no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
}


.notfound h2 {
  font-family: 'Roboto', sans-serif;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
}

.notfound p {
  font-family: 'Roboto', sans-serif;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 0px;
}


@media only screen and (max-width: 767px) {
    .notfound .notfound-title {
      height: 142px;
    }
    .notfound .notfound-title h1 {
      font-size: 112px;
    }
}
</style>