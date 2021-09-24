<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
// override bootstrap button
$base-color: orange;
$base-color-hover: #632b1d;
.btn-primary {
  background-color: $base-color;
  outline: $base-color;
}
.btn-primary:disabled {
  color: #fff;
  background-color: #989898;
  border-color: #989898;
}
.btn-primary:focus {
  background-color: $base-color;
  outline: $base-color;
}
.btn-outline-primary:hover {
  background-color: $base-color;
  outline: $base-color;
}
.btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 50%);
}
.btn-outline-primary {
  color: $base-color;
  border-color: $base-color;
}
.text-primary {
  color: $base-color;
}
.btn-primary:hover {
  background-color: $base-color-hover;
  outline: $base-color;
}
.fs-15 {
  font-size: 15px;
}
.text.justify {
  text-align: justify;
}

.text-right {
  text-align: right;
}
</style>
