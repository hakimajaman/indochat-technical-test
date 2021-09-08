<template>
  <div class="header-container">
    <div class="logo"><img src="../assets/logo.png" /></div>
    <nav>
      <router-link
        :class="{
          'a-active': $route.hash === '#home' || $route.hash.length < 1,
        }"
        :to="{ name: 'LandingPage', hash: '#home' }"
        >Home</router-link
      >
      <router-link
        :class="{
          'a-active': $route.hash === '#discover',
        }"
        :to="{ name: 'LandingPage', hash: '#discover' }"
        >Discover</router-link
      >
      <router-link
        :class="{
          'a-active': $route.hash === '#feedback',
        }"
        :to="{ name: 'LandingPage', hash: '#feedback' }"
        >Register</router-link
      >
      <button>
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
      <button class="burger">
        <font-awesome-icon :icon="['fas', 'grip-lines']" />
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  background: #f6f8f8;
  padding: 10px 0px 10px 0px;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  position: fixed;
  z-index: 99;
  align-items: center;
  width: 100%;

  nav {
    margin-left: auto;
    margin-right: 25px;
    margin-bottom: 5px;

    a {
      margin-right: 10px;
      padding: 10px 40px;
      border-radius: 100px;
      color: #0c0c0c;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        background: #e0e1e0;
      }
    }

    button {
      background: transparent;
      border: 0px;
      font-size: 20px;
      color: grey;
    }
  }
}
.a-active {
  background: #e0e1e0;
}
.logo {
  background: #ffffff;
  border-radius: 100px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  -webkit-box-shadow: 0.5px 2px 2px #ccc9c8;
  -moz-box-shadow: 0.5px 2px 2px #ccc9c8;
  box-shadow: 0.5px 2px 2px #ccc9c8;
  margin-left: 25px;
  img {
    width: 20px;
  }
}
.burger {
  display: none;
  @media only screen and (max-width: 767px) {
    margin-left: 25px;
    display: inline;
  }
}
</style>
