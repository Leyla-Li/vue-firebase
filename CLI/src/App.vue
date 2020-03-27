<template>
  <div id="app">
    <h1>{{ title }}</h1> 
    <Navbar />

  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'app',
  components: {
    // Navbar: Navbar or use ES6 JUST
    Navbar
  },
  data () {
    return {
      title: 'My first Vue app',
      
    }
  }
}
</script>

<style>

h1 {
  font-weight: normal;
  color: pink;
  text-align: center;
}

</style>
