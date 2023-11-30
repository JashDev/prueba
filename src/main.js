import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueI18n from 'vue-i18n'
import enMessages from './locales/en.json'
import '@/assets/scss/main.scss'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: enMessages
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
