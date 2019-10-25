import Vue from 'vue'
import App from './App.vue'
import Home from './components/home.vue';


Vue.component('site-home', Home);
new Vue({
  el: '#app',
  render: h => h(App)
})  
