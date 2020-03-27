<template>
  <div class='blogs'>
    <h2>{{ blogTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Blogs',

  data(){
    return{
      blogTitle: 'Leyla\'s blog'
    }
  },
// hooks
  beforeCreate(){
    alert('before create hook')
  },
  created(){
    alert('created hook')
  }
}
</script>