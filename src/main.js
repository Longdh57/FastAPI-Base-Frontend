import 'core-js/stable'
import 'babel-polyfill'
import Vue from 'vue'
import Notifications from 'vue-notification'
//import CoreuiVuePro from '@coreui/vue-pro'
import CoreuiVuePro from '../node_modules/@coreui/vue-pro/src/index.js'
import App from './App'
import router from './router'
import store from './store'
import { iconsSet as icons } from './assets/icons/icons.js'
import i18n from './i18n.js'
import './permission'


Vue.use(CoreuiVuePro)
Vue.use(Notifications)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  //CIcon component documentation: https://coreui.io/vue/docs/components/icon
  icons,
  i18n,
  template: '<App/>',
  components: {
    App
  }
})
