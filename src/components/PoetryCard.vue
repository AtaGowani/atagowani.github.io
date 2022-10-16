<template>
  <div class="col-12 col-lg-4 text-left">
    <div class="card">
      <div class="card-body">
        <router-link :to="getURL()">
          <h5 class="card-title">{{ poetry.title }}</h5>
        </router-link>
        <p class="card-subtitle text-muted">Written in {{ poetry.language }}</p>
        <p class="card-text">
          {{ poetry.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poetry: Object,
    id: Number,
  },
  methods: {
    getURL: function () {
      return "/poetry/" + this.id;
    },
  },
};
</script>

<style>
.poetry-lang {
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .poetry-preview {
    font-size: 1.1rem;
  }

  .poetry-lang {
    font-size: 0.9rem;
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