<template>
  <div id = "app">
    <div class = "menue">
      <router-link to='/'>
        <p>Home</p>
      </router-link>
      <router-link to='/playing'>
        <p>Now Playing</p>
      </router-link>
      <router-link to='/music'>
        <p>Music</p>
      </router-link>
      <router-link to = '/list'>
        <p>Playlist</p>
      </router-link>
    </div>
    <router-view/>
    <hr/>
    <div class = 'footer'>
        <a href='https://github.com/JadenJohnson227/music-project'>Github repository</a>
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
    --raisin-black: #26282c;  /* background black */
    --tangerine: #f58b00;     /* tangerine */
    --platinum: #eaebec;      /* off whitSe */
    --forest-green: #63A375;  /* pastel green */

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    color: var(--platinum);
    background-color: var(--raisin-black);
  }

  #app p {
    text-decoration-style: none;
    font-size: 20px;
    color: var(--tangerine);
  }

  .menue {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    text-decoration: none;
    color: var(--tangerine);
  }

  .footer {
    padding: 20px;
  }

  .footer a {
    color: var(--forest-green);
  }

</style>
