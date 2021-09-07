<template>
  <header-component />
  <section-1-component />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import Section1Component from "./components/Section1Component.vue";
export default {
  components: {
    HeaderComponent,
    Section1Component,
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
