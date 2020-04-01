<template>
    <div class="view-profile">
        <h2>Profile for {{ userId }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ViewProfile',
    data() {
        return {
          userId: this.$route.params.user_id
        }
    },

    methods: {
      updateId(){
        this.userId = this.$route.params.user_id
      }
    },

    //without it when the route params change, if we go from one profile to another, the component will not change, now whenever the route change, it fires the method and change userId
    watch: {
      $route: 'updateId'
    }
}
</script>

<style>

</style>