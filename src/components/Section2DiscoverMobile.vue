<template>
  <section>
    <div class="section-nav" v-for="(dat, i) in nav" :key="i">
      <div
        class="nav-prop"
        :class="{ 'nav-prop-active': choose === i }"
        @click="chooseThis(i)"
      >
        <h2>{{ dat.name }}</h2>
        <font-awesome-icon class="caret" :icon="['fas', 'caret-down']" />
      </div>
      <div class="nav-dat" v-if="choose === i">
        <img class="image-opt" :src="dat.image" />
        <p>
          {{ dat.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["nav", "choose", "chooseThis"],
};
</script>

<style scoped lang="scss">
.nav-prop {
  border-bottom: 3px solid #e0e0e0;
  padding-left: 20px;
  display: flex;
  align-items: center;
  .caret {
    margin-left: auto;
    margin-right: 20px;
  }
  &:hover {
    background: #dad9d9;
  }
}
.nav-prop-active {
  background: #dad9d9;
}
.nav-dat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  background-color: #f7f7f7;
  p {
    margin: 0;
    margin-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  img {
    width: 300px;
    height: 200px;
    margin-top: 40px;
    margin-bottom: 5px;
    border-radius: 10px;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  }
}
</style>
