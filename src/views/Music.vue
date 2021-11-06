<template>
  <div class = "music">
    <h1>Music page</h1>
    <SongList :songs="songs" />
  </div>
</template>

<script>
  import SongList from "../components/SongList.vue"
  export default{
    name: "Music",
    components:{
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
