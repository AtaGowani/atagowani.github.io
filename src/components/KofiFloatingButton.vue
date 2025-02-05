<template>
  <a href="https://ko-fi.com/atagowani">
    <img src="../../src/assets/kofi-support.webp" alt="Buy me a coffee" class="kofi-support-btn">
  </a>
</template>

<style>
.kofi-support-btn {
  position: fixed;
  bottom: 0;
  right: 0;
  opacity: .8;
}

.kofi-support-btn:hover,
.kofi-support-btn:active {
  opacity: 1;
}

.kofi-support-btn {
  width: 10rem;
  margin: 2rem 1.5rem;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .kofi-support-btn {
    width: 13rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .kofi-support-btn {
    width: 14rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {}
</style>