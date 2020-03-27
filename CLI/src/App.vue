<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar /> 
    <Blogs />   
  </div>
</template>

<script>
import Navbar from './Navbar'
import Blogs from './Blogs'

export default {
  name: 'app',
  components: {
    Navbar,
    Blogs
  },
  
  data () {
    return {
      title: 'My first vue blog'
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>
