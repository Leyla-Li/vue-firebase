<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
export default {
  name:'GMap',
  data(){
    return {

    }
  },

  methods: {
    renderMap(){    
      const map = new google.maps.Map()
    }
  },

  mounted(){
    renderMap();
  },
}
</script>

<style>

</style>