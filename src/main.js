// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: 'cyan',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})