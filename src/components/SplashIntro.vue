<template>
  <div class="vertical-center text-left">
    <img
      src="../assets/profile-min.png"
      alt="Ata Gowani Profile"
      class="profile rounded-circle"
    />
    <h1>
      Hi, my name is Ata. I am
      <span class="personal-description">an engineer</span>.
    </h1>
    <h6 class="lead">
      I'm currently working @ HubSpot under product security.
    </h6>
    <div class="socials">
      <a href="https://github.com/AtaGowani"><i class="bi bi-github"></i></a>
      <a href="https://www.linkedin.com/in/atagowani/"
        ><i class="bi bi-linkedin"></i
      ></a>
      <a href="https://twitter.com/AtaGowani"><i class="bi bi-twitter"></i></a>
      <a href="https://www.youtube.com/channel/UCOAwZEh0hSnFd9cJzCPJV1g"
        ><i class="bi bi-youtube"></i
      ></a>
      <a href="mailto:me@atagowani.com"><i class="bi bi-envelope-fill"></i></a>
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
      let descriptions = [
        "an engineer",
        "a poet",
        "a musician",
        "a tinkerer",
        "an investor",
        "a cat dad",
      ];
      let personal_desc_span = document.getElementsByClassName(
        "personal-description"
      )[0];
      let curr_desc_i = descriptions.findIndex(
        (desc) => desc == personal_desc_span.innerHTML
      );
      let new_desc_i = (curr_desc_i + 1) % descriptions.length;

      personal_desc_span.innerHTML = descriptions[new_desc_i];
    },
  },
  mounted: function () {
    setInterval(this.rollingDescriptions, 2500);
  },
  unmounted: function () {
    for (let i = 0; i < 1000; i++) {
      window.clearInterval(i);
    }
  },
};
</script>

<style scoped>
.profile {
  height: 6rem;
  margin-bottom: 1rem;
}

h3 {
  margin: 40px 0 0;
}

.vertical-center {
  width: 100%;
  margin-top: 5%;
  padding: 2rem;
}

.socials i {
  font-size: 1.4rem;
  padding: 0 0.35rem;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .vertical-center {
    margin-top: 8%;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .vertical-center {
    margin-top: 10%;
  }

  .profile {
    height: 8rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .vertical-center {
    margin-top: 5%;
    padding-left: 3rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .socials i {
    font-size: 1.5rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .vertical-center {
    margin-top: 4%;
  }
}
</style>
