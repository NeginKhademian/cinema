<template>
  <div>
    <mainLayout>
      <div class=" py-5  ">
        <div class="container container-wrapper shadow-lg p-5">
          <h1 class="fs-1 text-white">list of movies</h1>
          <hr class="text-white" />
          <div class="d-flex  flex-wrap item-wrapper ">
            <template v-if="loaded">
              <template v-for="list in getList">
                <Card
                  :img="list"
                  :key="list.id"
                  :transition="list.id * 0.2"
                  class="p-5 "
                />
              </template>
            </template>
            <template v-else> <div class="load m-auto"></div></template>
          </div>
        </div>
      </div>
    </mainLayout>
  </div>
</template>

<script>
import Card from "@/components/card.vue";
export default {
  name: "App",
  data() {
    return {
      loaded: false,
    };
  },
  components: { Card },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },
  computed: {
    getList() {
      return this.$store.getters["cinema/getAllList"];
    },
  },
};
</script>

<style lang="scss" scoped>
.item-wrapper {
  min-height: 300px;
  z-index: 1;
}

.container-wrapper {
  background-color: #151515;
  background-image: linear-gradient(#1a1a1a, #000000 60%, #000000);
  background-repeat: no-repeat;
}
.movie {
  min-width: 120px;
  height: 100%;
  max-width: 200px;

  &.movie-image {
    width: 100px;
  }
}
.load {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 10px solid transparent;
  border-top: 10px solid#FF3D00;
  border-bottom: 10px solid #ff3d00;
  animation: rotate 1.8s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
