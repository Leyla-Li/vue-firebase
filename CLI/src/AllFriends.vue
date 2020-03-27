<template>
  <div id="all-friends">
    <h2>All friends</h2>
    <div v-for='(friend,index) in friends' :key='index'>
      <spam>{{ friend.name }}</spam>
    </div>
  </div>
</template>

<script>
export default {
  name:'Allfriends',
  data () {
    return {
      friends: [
        { name: 'Leyla', online: true},
        { name: 'Ian', online: false},
        { name: 'Sushi', online: true}
      ]
    }
  }
}
</script>

<style>

</style>