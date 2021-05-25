<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.v-application {
  font-family: 'Lato', 'Noto Sans JP', sans-serif !important;
}
.v-application a {
  color: #050505 !important;
  text-decoration: none;
}
h1 {
  color: #4e4444;
}
h2 {
  font-size: 28px;
  font-weight: 600;
  padding-left: 10px;
  background: transparent;
  border-left: solid 4px #4e4444;
  color: #4e4444;
}
h3 {
  font-size: 26px;
  font-weight: 500;
  color: #4e4444;
}
</style>
