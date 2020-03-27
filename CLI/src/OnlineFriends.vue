<template>
  <div id="online-friends">
    <h2>Online friends</h2>
    <div v-for='(friend,index) in friends' :key='index'>
      <spam v-if='friend.online'>{{ friend.name }}</spam>
    </div>
  </div>
</template>

<script>
export default {
  name:'Onlinefriends',
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