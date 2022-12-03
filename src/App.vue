<template>
  <NavBar></NavBar>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@100;200;300;400;700;900&family=Caveat&family=Roboto:wght@100;300;400&display=swap");

* {
  padding: 0;
  margin: 0;
}

.card-text {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1rem;
}

.card-subtitle {
  font-family: "Roboto", sans-serif;
}

.card-title {
  margin-bottom: 0.6rem;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #e1d89f !important;
  background: #2c061f;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
}

a {
  color: #e1d89f;
}

a:hover {
  color: #90d26d;
}

h2,
h3,
h4,
h5,
h6 {
  font-family: "Lora", serif;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  h1 {
    font-size: 2.3rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
