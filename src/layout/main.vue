<template>
  <div>
    <div class="vh-100">
      <div class="backwrap overflow-auto gradient">
        <div class="back-shapes">
          <div>
            <!-- this component act as latout with slot you can attach child component -->
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const local= localStorage.getItem('selected')
    if(local)
    {
      let converted=   JSON.parse( local)
      this.$store.dispatch('cinema/updateFromLocal',converted)
      // get saved data from localstorage and pass it to store to update list
    }
  },
}
</script>
<style scoped>
/* set main background */
.backwrap {
  background: #113243;
  background-image: url("/top-image.jpg");
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
