<template>
  <div id="app">
    <h1>{{ title }}</h1> 
    <Navbar />
    <AllFriends />
    <OnlinedFriends />
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlinedFriends from './OnlineFriends'

export default {
  name: 'app',
  components: {
    // Navbar: Navbar or use ES6 JUST
    Navbar,
    AllFriends,
    OnlinedFriends
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
