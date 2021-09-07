<template>
  <header-component />
  <section-1-booked-tools />
  <section-2-discover />
  <section-3-get-in-touch />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import Section1BookedTools from "./components/Section1BookedTools.vue";
import Section2Discover from "./components/Section2Discover.vue";
import Section3GetInTouch from "./components/Section3GetInTouch.vue";
export default {
  components: {
    HeaderComponent,
    Section1BookedTools,
    Section2Discover,
    Section3GetInTouch,
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  background: #ffff;
}
</style>
