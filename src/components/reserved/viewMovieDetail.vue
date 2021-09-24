<template>
  <div>
    <!-- some details about movie -->
    <div v-if="selectedMovie" class="d-flex  flex-wrap">
      <div class="col-md-6 col-sm-12 d-flex justify-content-center">
        <img  :src="selectedMovie.img" :alt="selectedMovie.movie" />
      </div>
      <div class="col-md-6 col-sm-12">
        <h2 class="text-left text-white p-1 fs-3">plot :</h2>
        <p class="text-left p-1 text-white-50">
          {{ selectedMovie.dsc }}
        </p>
        <div>
          <h2 class="text-left text-white fs-4 p-2 py-3">starring:</h2>
          <div class="text-left text-white-50">
            <template v-for="(star, key) in selectedMovie.starring">
              <span :key="key">
                {{
                  selectedMovie.starring.length - 1 != key ? star + "," : star
                }}
              </span>
            </template>
          </div>
        </div>
        <div>
          <h2 class="text-left text-white fs-4 p-2 py-3">release date:</h2>
          <div class="text-left text-white-50">
            <span>
              {{ selectedMovie.releasDate + " " + selectedMovie.releasTime }}
            </span>
          </div>
        </div>
        <selectingSeat :selectedMovie="selectedMovie" />
      </div>
    </div>
  </div>
</template>
<script>
import selectingSeat from "./selectingSeat.vue";
export default {
  components: { selectingSeat },
  props: ["selectedMovie"],
};
</script>
