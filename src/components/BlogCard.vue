<template>
  <div class="col-12 col-lg-4 text-left">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ blog.title }}</h5>
        <h6 class="card-subtitle text-muted">{{ blog.date.toDateString() }}</h6>
        <p class="card-text">
          {{ getPreview() }}
        </p>
        <router-link :to="getURL()" class="card-link"
          >Read More &#8594;</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
  props: {
    blog: Object,
    id: Number,
  },
  methods: {
    getURL: function () {
      return "/blog/" + this.id;
    },
    getPreview: function () {
      let preview_arr = this.blog.body.split(" ", 25);
      return preview_arr.join(" ") + "...";
    },
  },
};
</script>