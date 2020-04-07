<template>
  <div class="chat container">
    <h2 class="center teal-text">Let's chat here</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text"> Name</span>
            <span class="grey-text text-darken-3">message</span>
            <span class="grey-text time">time</span>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: ['name'],
  data(){
    return {

    }
  }
}
</script>

<style>

</style>