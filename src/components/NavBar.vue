<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand" to="/">A.G.</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/library">library</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/album">album</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="http://gowani.blog"
            >blog</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://apoetinprogress.com/">poetry</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.line {
  width: 30px;
  height: 3px;
  background-color: #e1d89f;
  display: block;
  margin: 6px auto;
}

.navbar {
  font-size: 1.2rem;
}

.navbar-brand {
  font-size: 1.5rem;
}
</style>

<script>
export default {
  name: "NavBar",
};
</script>