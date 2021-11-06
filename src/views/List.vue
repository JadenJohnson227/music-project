<template>
  <div class = "playlist">
    <h1>Playlist page</h1>
    <div v-if="this.$root.$data.playlist.length === 0">
      <h2>Your playlist is empty!</h2>
    </div>
    <div v-else>
      <PlayList :items="items"/>
    </div>
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
