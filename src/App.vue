<template>
<div id="app">
  <div id = "links">
    <router-link to='/'>
      <p>home page</p>
    </router-link>
    <router-link to='/music'>
      <p>music page</p>
    </router-link>
    <router-link to='/list'>
      <p>playlist page</p>
    </router-link>
  </div>
  <router-view />
  <hr/>

  <div class='footer'>
    <div class='footer-item'>
      <a href ='https://github.com/JadenJohnson227/music-project'>Github repository</a>

    </div>
  </div>
</div>
</template>

<script>
export default{
  name: 'App',
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
