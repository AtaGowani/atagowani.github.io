<template>
  <div class="text-left px-3 poetry text-center">
    <h1 class="my-3">{{ poetry[$route.params.id].title }}</h1>
    <p v-for="(line, index) in poetry[$route.params.id].body" :key="index">
      {{ line }}
    </p>
  </div>
</template>

<script>
import poetry from "../data/poetry";

export default {
  name: "PoetryContentPage",
  data() {
    return {
      poetry: poetry.slice().reverse(),
    };
  },
};
</script>