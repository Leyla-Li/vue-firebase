<template>
  <div class="view-profile container">
    <div v-if="profile" class="card">
      <h2 class="deep-purple-text center">{{profile.alias}}'s Wall</h2>
      <ul class="comments collection">
        <li>Comment</li>
      </ul>
      <form @submit.prevent="addComment">
        <div class="field">
          <label for="comment">Add a comment</label>
          <input type="text" name="comment" v-model="newComment" />
          <p class="red-text center" v-if="feedback">{{ feedback }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'ViewProfile',
  data(){
    return{
      profile: null,
      newComment: null,
      feedback: null
    }
  },

  methods: {
    addComment(){
      if(this.newComment){
        this.feedback = null
        db.collection('comments').add({
          to: this.$route.params.id,
          from: ,
          content: this.newComment,
          time: Date.now()
        })
          .then(() => {
            this.newComment = null
          })
      }else{
        this.feedback = 'Please enter a comment'
      }
    }
  },

  created() {
    let ref = db.collection('users')
    ref.doc(this.$route.params.id).get()
      .then(user => {
        this.profile = user.data()
      })
  }
}
</script>

<style>

</style>