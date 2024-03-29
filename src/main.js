import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

Vue.directive('focus', {
  inserted: function (el) {
      el.focus()
  }
})
 /* eslint-disable no-console */
//console.log( document.querySelector('body').style.width = w);
/* eslint-enable no-console */
