<template>
  <div class="text-left ml-5 mb-5 mt-3">
    <h1 class="my-3">{{ blogs[$route.params.id].title }}</h1>
    <p>
      {{ blogs[$route.params.id].body }}
    </p>
  </div>
</template>

<script>
import blogs from "../data/blogs";

export default {
  name: "BlogContent",
  data() {
    return {
      blogs: blogs.slice().reverse(),
    };
  },
};
</script>