<template>
  <section class="section-container" id="discover">
    <div class="section-title">
      <font-awesome-icon :icon="['fas', 'chart-line']" class="font-awesome" />
      <h1>DISCOVER</h1>
      <h1>BOOKED TOOL</h1>
    </div>
    <img class="image-opt" :src="nav[choose].image" />
    <div class="section-nav">
      <div class="nav-opt">
        <div
          v-for="(dat, i) in nav"
          class="section-opt"
          :class="{ 'choose-active': choose === i }"
          :key="i"
          @click="chooseThis(i)"
        >
          <h2>
            {{ dat.name }}
          </h2>
        </div>
      </div>
      <div class="blue-underline" :style="carouselBorderMove"></div>
    </div>
    <div class="section-paragraph">
      <div class="move-wrap" :style="carouselTextMove">
        <div class="paragraph-slide" v-for="(dat, i) in nav" :key="i">
          <p>
            {{ dat.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-mobile-container">
    <section-2-discover-mobile
      :nav="nav"
      :choose="choose"
      :chooseThis="chooseThis"
    />
  </section>
</template>

<script>
import Section2DiscoverMobile from "./Section2DiscoverMobile.vue";
import Picsum1 from "../assets/picsum-1.jpg";
import Picsum2 from "../assets/picsum-2.jpg";
import Picsum3 from "../assets/picsum-3.jpg";
import Picsum4 from "../assets/picsum-4.jpg";
export default {
  components: {
    Section2DiscoverMobile,
  },
  data() {
    return {
      choose: 0,
      carouselTextMove: {
        right: "0",
      },
      carouselBorderMove: {
        left: "11%",
      },
      nav: [
        {
          name: "Discover A",
          image: Picsum1,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi minus nemo itaque rerum quibusdam deleniti iste dolorem, autem assumenda tempore amet nostrum recusandae qui delectus velit odit corporis doloremque laborum?",
        },
        {
          name: "Discover B",
          image: Picsum2,
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
          name: "Discover C",
          image: Picsum3,
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        },
        {
          name: "Discover D",
          image: Picsum4,
          text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        },
      ],
    };
  },
  methods: {
    chooseThis(index) {
      this.choose = index;
      if (index < 1) {
        this.carouselTextMove.right = 0;
        this.carouselBorderMove.left = "11%";
      } else {
        this.carouselTextMove.right = `${index}00%`;
        if (index % 2 === 0) {
          let count = index * 11;
          this.carouselBorderMove.left = `${count}%`;
        }
      }
    },
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
  @media only screen and (max-width: 767px) {
    display: none;
  }
}
.section-mobile-container {
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
  }
}
.section-title {
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
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
.section-container img.transparent {
  opacity: 0;
}
.section-nav {
  border-bottom: 3px solid #e0e0e0;
  width: 720px;
  margin-bottom: 10px;
  overflow: hidden;
}
.nav-opt {
  display: flex;
  justify-content: center;
}
.section-opt {
  margin-right: 30px;
  border-bottom: 5px solid transparent;
  cursor: default;
  h2 {
    font-weight: 100;
    margin-bottom: 0px;
  }
  &:hover {
    h2 {
      font-weight: 600 !important;
    }
  }
}
.choose-active {
  // border-bottom: 5px solid #428ecb !important;
  h2 {
    font-weight: 600 !important;
  }
}
.section-paragraph {
  color: #656665;
  width: 600px;
  font-size: 18px;
  transition: 0.5s all;
  overflow-x: hidden;
}
.move-wrap {
  display: flex;
  position: relative;
  transition: linear 0.5s;
}
.paragraph-slide {
  width: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
}
.blue-underline {
  background-color: #428ecb;
  width: 115px;
  height: 5px;
  position: relative;
  // left: 11%;
  // left: 69%;
  transition: linear 0.5s;
}
</style>
