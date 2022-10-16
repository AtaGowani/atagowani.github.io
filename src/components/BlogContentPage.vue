<template>
  <div class="text-left ml-5 mb-5 mt-3">
    <h1 class="my-3">{{ blogs[$route.params.id].title }}</h1>
    <p v-for="(line, index) in blogs[$route.params.id].body" :key="index">
      {{ line }}
    </p>
  </div>
</template>

<script>
import blogs from "../data/blogs";

export default {
  name: "BlogContentPage",
  data() {
    return {
      blogs: blogs.slice().reverse(),
    };
  },
};
</script>