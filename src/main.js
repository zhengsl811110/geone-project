// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-theme-default'
import VueEvents from 'vue-events'
import  './core/Util'

// import 'material-design-icons/iconfont/material-icons.css'
// import VueMaterial from '@/components/vue-material'
// import '@/components/vue-material/vue-material.css'
//
// Vue.use(VueMaterial)
//
// Vue.material.registerTheme({
//   default: {
//     primary: 'cyan',
//     accent: 'pink'
//   },
//   indigo: {
//     primary: 'indigo',
//     accent: 'pink'
//   }
// });

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueEvents);
//全局基本配置
window.OneMap = {
  map: null,
  modules: null,
  services: null,
  hostIp: '192.168.42.75'
};
/* eslint-disable no-new */
//登入情况验证
router.beforeEach(({meta, path}, from, next) => {
  var {auth = true} = meta;
  if (auth && sessionStorage.getItem("data-login") ==null) {
    return next({path: '/'});
  }
  next();
});


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
