import Vue from 'vue';
import App from './App.vue';
import './assets/css/main.css';


Vue.config.productionTip = false;

new Vue({
  render(h) { return h(App); },
}).$mount('#app');
