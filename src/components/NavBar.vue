<template>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">A.G.</a>
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
          <a class="nav-link" href="#/about">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/blog">blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/library">library</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.line {
  width: 30px;
  height: 3px;
  background-color: #defbc2;
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