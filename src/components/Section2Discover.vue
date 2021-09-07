<template>
  <section class="section-container" id="discover">
    <div class="section-opt">
      <font-awesome-icon :icon="['fas', 'chart-line']" class="font-awesome" />
      <h1>DISCOVER</h1>
      <h1>BOOKED TOOL</h1>
    </div>
    <img class="image-opt" src="../assets/picsum-1.jpg" />
    <div class="section-nav">
      <h2
        v-for="(dat, i) in nav"
        :key="i"
        :class="{ 'h2-active': choose === i }"
      >
        {{ dat }}
      </h2>
    </div>
    <div class="section-paragraph">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi minus
        nemo itaque rerum quibusdam deleniti iste dolorem, autem assumenda
        tempore amet nostrum recusandae qui delectus velit odit corporis
        doloremque laborum?
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      choose: 0,
      nav: ["Discover A", "Discover B", "Discover C", "Discover D"],
    };
  },
};
</script>

<style scoped lang="scss">
.section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
}
.section-opt {
  text-align: center;
  .font-awesome {
    font-size: 40px;
    font-weight: 100;
    margin-bottom: 20px;
  }
  h1 {
    margin-top: 0px;
    margin-bottom: 8px;
    &:last-child {
      font-weight: 100;
      margin-bottom: 0;
    }
  }
}
.image-opt {
  width: 600px;
  height: 400px;
  margin-top: 40px;
  border-radius: 10px;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
}
.section-nav {
  display: flex;
  border-bottom: 3px solid #e0e0e0;
  width: 720px;
  justify-content: center;
  margin-bottom: 10px;
  h2 {
    margin-right: 30px;
    margin-bottom: 0px;
    border-bottom: 5px solid transparent;
    font-weight: 100;
    cursor: default;
  }
}
.h2-active {
  border-bottom: 5px solid #428ecb !important;
  font-weight: 600 !important;
}
.section-paragraph {
  color: #656665;
  width: 600px;
  font-size: 18px;
}
</style>
