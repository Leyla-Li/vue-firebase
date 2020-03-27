<template>
  <div class='blogs'>
    <h2>{{ blogTitle }}</h2>
    <button @click='changeTitle'>Change Title</button>
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

  methods: {
    changeTitle(){
      this.blogTitle = 'Sushi\'s blog'
    }
  },
// hooks
  beforeCreate(){
    alert('before create hook')
  },
  created(){
    alert('created hook')
  },
  beforeUpdate(){
    alert('before update hook');
  }
}
</script>