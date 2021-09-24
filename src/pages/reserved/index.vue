<template>
  <div>
    choosing chair
    <mainLayout>
      <div class=" py-5  ">
        <div class=" item-wrapper container container-wrapper shadow-lg p-5">
               <h1 class="fs-1 text-white">{{selectedMovie.movie}}</h1>
      <hr class="text-white"/>
          <div class="d-flex ">
            <!-- movie detail -->
            <viewMovieDetail :selectedMovie="selectedMovie" />
          </div>
        </div>
      </div>
    </mainLayout>
  </div>
</template>
<script>
import viewMovieDetail from "@/components/reserved/viewMovieDetail.vue";
export default {
  components: { viewMovieDetail },
  data() {
    return {
      id: this.$route.query.id,
    };
  },
  computed: {
    selectedMovie() {
      return this.$store.getters["cinema/getAllList"][this.id - 1];
    },
  },
  mounted() {
    this.$store.dispatch("cinema/getMovie", this.id);
  },
};
</script>
<style lang="scss" scoped>
.container-wrapper {
  background-color: #151515;
  background-image: linear-gradient(#1a1a1a, #000000 60%, #000000);
  background-repeat: no-repeat;
}
</style>
