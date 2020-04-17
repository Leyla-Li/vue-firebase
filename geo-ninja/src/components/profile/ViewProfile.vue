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
      profile: null
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