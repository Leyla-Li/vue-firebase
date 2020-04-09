<template>
  <div class="signup container">
    <form class="card-panel">
      <h2 class="center deep-purple-text">Signup</h2>
      <div class="field">
        <label for="email">E-mail:</label>
        <input type="email" name="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password">
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="alias" name="alias">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data(){
    return {

    }
  }
}
</script>

<style>

</style>