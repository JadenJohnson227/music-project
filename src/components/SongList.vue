<template>
<div class="wrapper">
  <div class="songs">
    <div class="song" v-for="song in songs" :key="song.id">
      <div class="info">
        <h1>{{song.name}}</h1>

      </div>
      <div class="artist">
        <h2>{{song.artist}}</h2>
      </div>
      <div class="playlist">

        <form @submit.prevent="addSong(song)">
          <button class="auto">Add to PlayList</button>
        </form>
      </div>
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
    addSong(song){
      this.$root.$data.addSong(song);

    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
