<template>
<div class="wrapper">
    <div class="song" v-for="song in songs" :key="song.id">
      <div class="title">
        <h1>{{song.name}}</h1>
      </div>
      <div class="artist">
        <h2>{{song.artist}}</h2>
      </div>
      <div class="playNow">
        <form @submit.prevent="playSong(song)">
          <button class="auto">Play Song</button>
        </form>
      </div>
      <div class="playlist">
        <form @submit.prevent="addSong(song)">
          <button class="auto">Add to PlayList</button>
        </form>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    songs: Array
  },
  methods:{
    addSong(song) {
      this.$root.$data.addSong(song);
    },
    playSong(song) {
      this.$root.$data.nowPlaying = song;
      this.$root.$router.push({path: '/playing'});
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  justify-content: center;
  width: 75%;
}

.song {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 5px;
  background-color: #42464C; /* Charcoal (lighter Gray) */
  padding: 10px;
  margin: 10px;
  margin-top: 50px;
  width: 200px;
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
}
</style>
