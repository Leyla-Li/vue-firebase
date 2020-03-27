<template>
  <div id="app">
    <h1>{{ title }}</h1> 
    <Navbar />
    <!-- without the : then it will see friends as a string to pass in as prop -->
    <AllFriends :friends='friends' @delete='deleteFriend' />
    <OnlinedFriends :friends='friends' />
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
      friends: [
        { name: 'Leyla', online: true},
        { name: 'Ian', online: false},
        { name: 'Sushi', online: true}
      ]
      
    }
  },
  methods: {
    deleteFriend(payload){
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
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
