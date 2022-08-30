<script>
export default {
  props: {
    title: String,
    preview: String,
    linkId: Number,
  },
};
</script>

<template>
  <div class="col-12 col-lg-4 text-left">
    <div class="card">
      <div class="card-body">
        <a :href="linkId">
          <h5 class="card-title">{{ title }}</h5>
        </a>
        <p class="card-text poetry-preview">
          {{ preview }}
        </p>
      </div>
    </div>
  </div>
</template>