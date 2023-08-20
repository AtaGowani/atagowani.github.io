<template>
  <div class="text-left ml-5 mb-5 mt-3">
    <h1>Ablum</h1>
    <h6 class="lead">Pictures I have taken</h6>
  </div>
  <div class="d-flex flex-row flex-wrap album justify-content-center">
    <div v-for="n in 13" :key="n" class="p-3">
      <img :src="'/assets/album/' + n + '.JPG'" />
    </div>
  </div>
</template>

<style>
.album {
  margin: 0;
}

.album img {
  height: 15rem;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .album img {
    height: 18rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .album img {
    height: 25rem;
  }
}
</style>