<!-- App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">MIS APP DE PELICULAS</router-link> 
    </nav>
    <router-view/>
    
  </div>
</template>

<script>


export default {
 
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #239fc5;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #34e4b8;

    &.router-link-exact-active {
      color: #c6f103;
    }
  }
}
</style>
