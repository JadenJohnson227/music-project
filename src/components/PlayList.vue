<template>
<div class="wrapper">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="title">
        <h1>{{item.name}}</h1>
      </div>
      <div class="artist">
        <h2>{{item.artist}}</h2>
      </div>
      <div class="playNow">
        <form @submit.prevent="playSong(item)">
          <button class="auto">Play Song</button>
        </form>
      </div>
      <div class="remove">
        <form @submit.prevent="removeSong(item)">
          <button class="auto">X</button>
        </form>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayList',
  props: {
    items: Array
  },
  methods:{
    removeSong(item){
      this.$root.$data.removeSong(item);
    },
    playSong(song) {
      this.$root.$data.nowPlaying = song;
      this.$root.$router.push({path: '/playing'});
    },

  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  margin: auto;
}

.item {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  background-color: #42464C; /* Charcoal (lighter Gray) */
  padding: 10px;
  margin: auto;
  margin-top: 50px;
}

.title .artist .playNow .remove {
  margin: 10px;
}

.title {
  display: flex;
  flex-direction: column;
  background: #F2921D;
  color: #000;
  padding: 15px;
  height: 80px;
  width: 100%;
}

.title h1 {
  margin: auto;
  align-self: center;
  font-size: 30px;
}

.title p {
  margin: 0px;
  font-size: 10px;
}

.artist {
  display: flex;
  width: 100%;
  justify-content: center;
}

.artist h2 {
  font-size: 24px;
}

button {
  border-radius: 5px;
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.playNow button {
  background: #63A375; /* Forest Green Crayola */
}

.auto {
  margin-left: auto;
  padding: 10px;
}
</style>
