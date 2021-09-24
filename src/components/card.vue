<template>
  <div>
    <div class="wrapper">
     
      <div
        :style="`animationDelay:${transition}s`"
        class="shadow d-flex align-items-center fade-enter-active card movie p-2"
      >
        <div class="w-100">
          <div class="card-container">
            <div
              :style="{
                backgroundImage: `url(${img.img})`,
              }"
              class="front"
            >
              <div class="inner">
                <p>{{ img.movie }}</p>
                <p>{{ img.releasDate }}</p>
                <p>{{ img.releasTime }}</p>
              </div>
            </div>
            <div
              :style="{
                backgroundImage: `url(${img.img})`,
              }"
              class="back"
            >
              <div
                class="inner h-100 d-flex flex-column justify-content-around"
              >
                <p class="fs-4 text-justify">
                  directed by:{{ img.directedBy }}
                </p>
                <div>
                  <button
                    @click="redirectToCinema(img)"
                    class="px-2 fs-6 btn btn-primary"
                  >
                    buy/details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["transition", "img"],
  data: function() {
    return {
      src:
        "https://upload.wikimedia.org/wikipedia/fa/0/00/Posterejdehavaredmishavad.jpg",
      loaded: false,
    };
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    },
    redirectToCinema(img) {
      this.$router.push({path:"/reserved",query:{id:img.id}});
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 250px;
}

.fade-enter-active {
  animation-name: scale;
  -webkit-animation-name: scale;
  animation-duration: 0.7s;
  -webkit-animation-duration: 0.7s;
}
.imageWrapper {
  width: 150px;
  min-height: 200px;
}
@keyframes scale {
  0% {
    transform: scale(100%);
  }
  50% {
    transform: scale(120%);
  }
  100% {
    transform: scale(100%);
  }
}

@-webkit-keyframes scale {
  0% {
    transform: scale(100%);
  }
  50% {
    transform: scale(120%);
  }
  100% {
    transform: scale(100%);
  }
}

.card-container {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.front,
.back {
  // background-image: url("https://unsplash.it/500/500/");
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-position: center;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 280px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
}

.back {
  background: #cedce7;
  background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
}

.front:after,.back:after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  opacity: 0.8;
  background-color: #000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.inner:hover .front,
.inner:hover .back {
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.inner {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}

.card-container .back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.card-container .front {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.card-container:hover .back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.card-container:hover .front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.front .inner p {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after {
  content: "";
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #c6d4df;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.75rem;
}

.front .inner span {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
}
</style>
