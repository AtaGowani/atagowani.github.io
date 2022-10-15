<template>
  <div class="text-left ml-5 mb-5 mt-3">
    <h1>Blog</h1>
    <h6 class="lead">Thoughts I've entertained</h6>
  </div>
  <div class="d-flex flex-row flex-wrap books justify-content-left">
    <BlogCard
      v-for="(blog, index) in blogs"
      :blog="blog"
      :id="index"
      :key="index"
    >
    </BlogCard>
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
import blogs from "../data/blogs";

export default {
  name: "BlogPage",
  data() {
    return {
      blogs: blogs.slice().reverse(),
    };
  },
  components: {
    BlogCard,
  },
};
</script>

<style>
.card {
  background: #2c061f;
  border: #e1d89f71 solid;
}

.card-text {
  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>