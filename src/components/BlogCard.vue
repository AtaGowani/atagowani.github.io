<script>
export default {
  props: {
    title: String,
    preview: String,
    date: String,
    linkId: Number,
  },
};
</script>

<template>
  <div class="col-12 col-lg-4 text-left">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle text-muted">{{ date }}</h6>
        <p class="card-text">
          {{ preview }}
        </p>
        <a :href="linkId" class="card-link">Read More &#8594;</a>
      </div>
    </div>
  </div>
</template>
