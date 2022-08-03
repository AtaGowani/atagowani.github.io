<template>
  <NavBar></NavBar>
  <component :is="currentView" />
</template>

<script>
import Home from "./components/Home.vue";
import NotFound from "./components/NotFound.vue";
import NavBar from "./components/NavBar.vue";
import LibraryPage from "./components/LibraryPage.vue";
import BlogPage from "./components/BlogPage.vue";
import BlogContentPage1 from "./components/BlogContentPage1.vue";

const routes = {
  "/": Home,
  "/blog": BlogPage,
  "/library": LibraryPage,
  "/blog/1": BlogContentPage1,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
    data() {
      return {
        id: 1,
      };
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@100;200;300;400;700;900&display=swap");

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Lora", serif;
  text-align: center;
  color: #e1d89f !important;
  background: #2c061f;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
}

a {
  color: #e1d89f;
}

a:hover {
  color: #90d26d;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", sans-serif;
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
