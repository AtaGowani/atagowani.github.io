<template>
  <div class="text-left ml-5 mb-5 mt-3">
    <h1>my blog</h1>
    <p class="lead">some of the thoughts i've entertained</p>
  </div>
  <div class="d-flex flex-row flex-wrap books justify-content-left">
    <BlogCard
      title="if Python == None: Python = Learn"
      date="March 14th, 2016"
      preview="I have embarked on a journey of learning Python and HTML/CSS. Before I get into more details, I would like to take a moment and apologize if the title of my post was confusing. It was an attempt at mimicking the coding language of Python."
      link-id="/#/blog/1"
    ></BlogCard>
  </div>
</template>

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

<script>
import BlogCard from "./BlogCard.vue";

export default {
  name: "BlogPage",
  components: {
    BlogCard,
  },
};
</script>