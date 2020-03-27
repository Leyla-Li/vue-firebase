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
  props: ['friends'],
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>