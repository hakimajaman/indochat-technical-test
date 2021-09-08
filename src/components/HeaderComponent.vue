<template>
  <div class="header-container" :class="{ 'nav-open': navbarOpen }">
    <div>
      <div class="logo"><img src="../assets/logo.png" /></div>
    </div>
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
    </nav>
    <div class="nav-fixed">
      <div class="input-search" :class="{ 'input-search-active': search }">
        <font-awesome-icon :icon="['fas', 'search']" @click="onSearch" />
        <input placeholder="Search..." ref="searchFocus" v-on:blur="onSearch" />
      </div>
      <button class="burger" @click="onNavbar">
        <font-awesome-icon :icon="['fas', 'grip-lines']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: false,
      navbarOpen: false,
    };
  },
  methods: {
    onSearch() {
      this.search = !this.search;
      if (this.search) {
        setTimeout(() => {
          this.$refs.searchFocus.focus();
        }, 500);
      }
    },
    onNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
  },
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
  transition: all ease-out 0.3s;
  height: 40px;

  @media only screen and (max-width: 767px) {
    align-items: baseline;
    position: relative;
    -webkit-box-shadow: 0 0 0 rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 0px 0px rgba(57, 63, 72, 0.3);
    box-shadow: 0 0px 0px rgba(57, 63, 72, 0.3);
  }

  .nav-fixed {
    display: flex;
    align-items: center;
    margin-right: 25px;

    @media only screen and (max-width: 767px) {
      position: absolute;
      right: 0;
    }

    button {
      background: transparent;
      border: 0px;
      font-size: 20px;
      color: grey;
      transition: all 0.5s;
      cursor: pointer;

      &:hover {
        color: black;
      }
    }
  }

  nav {
    margin-left: auto;
    margin-bottom: 5px;
    display: flex;

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
    @media only screen and (max-width: 767px) {
      margin-left: 0;
      width: 100%;
      margin-top: 20px;

      a {
        border-radius: 0px;
        display: none;
      }
    }
  }
}
.nav-open {
  @media only screen and (max-width: 767px) {
    height: 200px;
    flex-direction: column;
    nav {
      flex-direction: column;
      a {
        transition: all display 1s;
        display: block;
      }
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
.input-search {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0px 10px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 100px;
  -webkit-box-shadow: 0 rgba(70, 74, 80, 0.3);
  -moz-box-shadow: 0 rgba(70, 74, 80, 0.3);
  box-shadow: 0 rgba(70, 74, 80, 0.3);
  input {
    display: none;
    width: 100%;
    height: 30px;
    background: transparent;
    outline: none;
    border: 0;
    margin-left: 10px;
  }

  &:hover {
    border: 1px solid #d6d6d6;
    background: white;
    transition: 0.5s all;
  }

  &-active {
    width: 200px;
    border: 1px solid #d6d6d6;
    background: white;
    transition: 0.5s all;
    input {
      display: block;
    }
    @media only screen and (max-width: 767px) {
      width: 150px;
    }
  }
}
</style>
