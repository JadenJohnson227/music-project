import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

let data = {
  songs: mock,
  playlist: [],
  nowPlaying: {
    id: 0,
    name: "",
    artist: "",
  },
  addSong(id){
    this.playlist.push(id);
  },
  removeSong(id){
    this.playlist.splice(this.playlist.indexOf(id),1);
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
