import Vue from 'vue'
import App from './App.vue'


window.onload = function () {
  var main = new Vue({
    el: '#app',
    render: h => h(App)
  });
}