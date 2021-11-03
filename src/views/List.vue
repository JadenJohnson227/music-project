<template>
  <div class = "playlist">
    <p>Playlist page</p>
    <PlayList :items="items"/>
  </div>


</template>

<script>
  import PlayList from "../components/PlayList.vue"
  export default{
    name: "List",
    components:{
      PlayList
    },
    data(){
      return{

      }
    },
    computed: {
      items(){
        return this.$root.$data.playlist.filter(item => item);
      }
    }
  }
</script>
