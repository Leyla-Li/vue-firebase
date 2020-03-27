<template>
  <div id="app">
    <h1>{{ title }}</h1> 
  </div>
</template>

<script>
export default {
  name: 'app',
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
}

</style>
