<template>
  <div class="vertical-center text-left">
    <h1>
      hi, my name is Ata. i am
      <span class="personal-description"> a software engineer</span>.
    </h1>
    <p class="lead">i'm currently working @ HubSpot under product security.</p>
    <div class="socials">
      <a href="https://github.com/AtaGowani"><i class="bi bi-github"></i></a>
      <a href="https://www.linkedin.com/in/atagowani/"
        ><i class="bi bi-linkedin"></i
      ></a>
      <a href="https://twitter.com/AtaGowani"><i class="bi bi-twitter"></i></a>
      <a href="https://www.youtube.com/channel/UCOAwZEh0hSnFd9cJzCPJV1g"
        ><i class="bi bi-youtube"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashIntro",
  props: {
    msg: String,
  },
  methods: {
    rollingDescriptions: function () {
      let descriptions = ["a poet", "a musician", "a tinkerer", "an investor"];
      let personal_desc_span = document.getElementsByClassName(
        "personal-description"
      )[0];
      let curr_desc = personal_desc_span.innerHTML;
      let new_desc =
        descriptions[Math.floor(Math.random() * descriptions.length)];

      while (curr_desc == new_desc) {
        new_desc =
          descriptions[Math.floor(Math.random() * descriptions.length)];
      }

      personal_desc_span.innerHTML = new_desc;
    },
  },
  mounted: function () {
    setInterval(this.rollingDescriptions, 4000);
  },
  unmounted: function () {
    for (let i = 0; i < 1000; i++) {
      window.clearInterval(i);
    }
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.vertical-center {
  width: 100%;
  margin-top: 30%;
  padding: 2rem;
}

.socials i {
  font-size: 1.4rem;
  padding: 0 0.35rem;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .vertical-center {
    margin-top: 25%;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .vertical-center {
    margin-top: 20%;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .vertical-center {
    margin-top: 18%;
    padding-left: 3rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .vertical-center {
    margin-top: 18%;
  }

  .socials i {
    font-size: 1.5rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .vertical-center {
    margin-top: 13%;
  }
}
</style>
