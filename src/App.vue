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
import PoetryPage from "./components/PoetryPage.vue";
import BlogContentPage1 from "./components/BlogContentPage1.vue";
import BlogContentPage2 from "./components/BlogContentPage2.vue";
import BlogContentPage3 from "./components/BlogContentPage3.vue";
import PoetryContentPage1 from "./components/PoetryContentPage1.vue";
import PoetryContentPage2 from "./components/PoetryContentPage2.vue";

const routes = {
  "/": Home,
  "/blog": BlogPage,
  "/poetry": PoetryPage,
  "/library": LibraryPage,
  "/blog/1": BlogContentPage1,
  "/blog/2": BlogContentPage2,
  "/blog/3": BlogContentPage3,
  "/poetry/1": PoetryContentPage1,
  "/poetry/2": PoetryContentPage2,
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
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@100;200;300;400;700;900&family=Caveat&display=swap");

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

.poetry-preview {
  font-family: "Caveat", cursive;
  font-size: 1.3rem;
}

.poetry {
  font-family: "Caveat", cursive;
  font-size: 1.3rem;
}

h1 {
  font-size: 1.8rem;
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
  .poetry {
    font-size: 1.4rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  h1 {
    font-size: 2.3rem;
  }

  .poetry {
    font-size: 1.9rem;
  }

  .poetry-preview {
    font-size: 1.6rem;
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
