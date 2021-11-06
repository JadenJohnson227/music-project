<template>
  <div>
    <h1>Now Playing:</h1>
    <div v-if="this.$root.$data.nowPlaying.id === 0">
      <h3>Nothing is Playing</h3>
    </div>
    <div v-else class="song">
      <h2>{{this.$root.$data.nowPlaying.name}}</h2>
      <p>By: {{this.$root.$data.nowPlaying.artist}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NowPlaying',
}
</script>

<style scoped>
  h2 {
    font-size: 50px;
  }

  h3 {
    color: #F58B00;
    font-size: 30px;
    margin: 100px;
  }

  p {
    font-size: 25px;
  }

  .song {
    border-radius: 10px;
    background-color: #42464C; /* Charcoal (lighter Gray) */
    margin: 10px;
    padding: 50px;
  }

</style>
