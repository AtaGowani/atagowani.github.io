<template>
  <div class="text-left ml-5 mb-5 mt-3">
    <h1>Blog</h1>
    <h6 class="lead">Thoughts I've entertained</h6>
  </div>
  <div class="d-flex flex-row flex-wrap books justify-content-left">
    <BlogCard
      title="My First Hackathon! (TAMU Hack)"
      date="October 15th, 2016"
      preview="There were so many feelings rushing through me as I hopped on the bus to Texas A&M. I was not sure what to expect even though I had done my fair share of research on what hackathons were like and how to make the best of them. Most of the articles had started off with a piece of advice: “Don’t be nervous. Just try new things.”"
      link-id="/#/blog/3"
    ></BlogCard>
    <BlogCard
      title="Working as a Web Developer"
      date="March 26th, 2016"
      preview="About a week ago, I had a chance to visit my dad at his new company, Gowani Pump Supply. I spent the whole day there, mainly just sitting around, as there was nothing for me to do. After I got home, I thought about his new business and realized that I could help him reach a wider audience by getting Gowani Pump Supply a presence on the glorious internet."
      link-id="/#/blog/2"
    ></BlogCard>
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