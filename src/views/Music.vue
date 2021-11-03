<template>
  <div class = "music">
    <p>Music page</p>
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
