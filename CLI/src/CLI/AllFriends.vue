<template>
  <div id="all-friends">
    <h2>All friends</h2>
    <div v-for='(friend,index) in friends' :key='index'>
      <spam @click='unfriend(friend.name)'>{{ friend.name }}</spam>
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
  },
  methods: {
    unfriend(name){
      this.$emit('delete', { name })
    }
  }
}
</script>

<style>

</style>