<template>
  <div>
    <h1>Home page</h1>
    <SongList :songs="songs"/>
  </div>
</template>

<script>
  import SongList from "../components/SongList.vue"
  export default{
    name: 'Home',
    components: {
      SongList
    },
    data(){
      return{

      }
    },
    computed: {
      songs(){
        return this.$root.$data.songs.filter(song => song);
      }
    }
  }
</script>
