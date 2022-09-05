<template>
  <div class="text-left ml-5 mb-5 mt-3">
    <h1>Poetry</h1>
    <h6 class="lead">Poetry I've expressed</h6>
  </div>
  <div class="d-flex flex-row flex-wrap books justify-content-left">
    <PoetryCard
      title="Jab ek dost seh mila"
      lang="Roman Urdu"
      preview="This one is about the time I met a dear friend."
      link-id="/#/poetry/2"
    ></PoetryCard>
    <PoetryCard
      title="A Stranger I Met"
      lang="English"
      preview="This one is about a stranger I met."
      link-id="/#/poetry/1"
    ></PoetryCard>
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
import PoetryCard from "./PoetryCard.vue";

export default {
  name: "PoetryPage",
  components: {
    PoetryCard,
  },
};
</script>