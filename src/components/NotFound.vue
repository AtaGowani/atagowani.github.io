<template>
  <div class="vertical-center text-left px-5">
    <img src="../assets/dory.png" alt="Dory from Finding Dory" class="not-found pb-3" />
    <h1>ERROR 404</h1>
    <p class="lead">Not all those wander are lost...but you totally are.</p>
  </div>
</template>

<style>
.not-found {
  height: 8rem;
}

.vertical-center {
  width: 100%;
  margin-top: 25%;
  padding: 0;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .vertical-center {
    margin-top: 20%;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .vertical-center {
    margin-top: 15%;
  }

  .not-found {
    height: 10rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .vertical-center {
    margin-top: 12%;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .vertical-center {
    margin-top: 10%;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .vertical-center {
    margin-top: 10%;
  }
}
</style>