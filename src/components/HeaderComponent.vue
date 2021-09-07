<template>
  <div class="header-container">
    <div class="logo"><img src="../assets/logo.png" /></div>
    <nav>
      <a>Home</a>
      <a>Discover</a>
      <a>Register</a>
      <button>
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </nav>
  </div>
</template>

<script>
// import Logo from '../assets/logo.png'
// export default {

// }
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  background: #f6f8f8;
  padding: 10px 25px;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  nav {
    margin-left: auto;
    margin-top: 5px;

    a {
      margin-right: 10px;
      padding: 10px 40px;
      border-radius: 100px;
      color: #0c0c0c;
      cursor: pointer;

      &:first-child {
        background: #e0e1e0;
      }

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
  img {
    width: 20px;
  }
}
</style>
