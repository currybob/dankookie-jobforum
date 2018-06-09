import 'babel-polyfill';
// import 'es6-promise/auto';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAxios from 'vue-axios';
import VueTuicalendar from '@lkmadushan/vue-tuicalendar';
import Vuefire from 'vuefire';
import axios from './customAxios.js';

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VSelect,
  VChip,
  VBtn,
  VBadge,
  VIcon,
  VGrid,
  VToolbar,
  VBottomNav,
  VDivider,
  VDialog,
  VSubheader,
  VCard,
  VCheckbox,
  VProgressCircular,
  transitions
} from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify/src/stylus/app.styl'
import 'tui-calendar/dist/tui-calendar.min.css'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VSelect,
    VChip,
    VBtn,
    VBadge,
    VIcon,
    VGrid,
    VToolbar,
    VBottomNav,
    VDivider,
    VDialog,
    VSubheader,
    VCard,
    VCheckbox,
    VProgressCircular,
    transitions
  },
  theme: {
    primary: '#CC8E40',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    dankook_blue: '#00529C'
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueTuicalendar);
Vue.use(Vuefire);

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
