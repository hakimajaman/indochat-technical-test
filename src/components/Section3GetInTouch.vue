<template>
  <section class="section-container" id="feedback">
    <div class="section-title">
      <font-awesome-icon :icon="['fas', 'clipboard']" class="font-awesome" />
      <h1>Get in touch</h1>
      <h1 class="h1-text">
        Want to get in touch? We'd love to hear from you. Here's how you can
        reach us..
      </h1>
      <div class="section-search">
        <font-awesome-icon class="awesome-search" :icon="['fas', 'search']" />
        <input placeholder="Search..." />
      </div>
    </div>
    <div class="section-feedback">
      <div class="feedback-maps">
        <l-map
          v-model="zoom"
          v-model:zoom="zoom"
          :center="[47.41322, -1.219482]"
          @move="log('move')"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-control-layers />
          <l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
            <l-tooltip> lol </l-tooltip>
          </l-marker>

          <l-marker :lat-lng="[47.41322, -1.219482]">
            <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
          </l-marker>

          <l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
            <l-popup> lol </l-popup>
          </l-marker>

          <l-polyline
            :lat-lngs="[
              [47.334852, -1.509485],
              [47.342596, -1.328731],
              [47.241487, -1.190568],
              [47.234787, -1.358337],
            ]"
            color="green"
          ></l-polyline>
          <l-polygon
            :lat-lngs="[
              [46.334852, -1.509485],
              [46.342596, -1.328731],
              [46.241487, -1.190568],
              [46.234787, -1.358337],
            ]"
            color="#41b782"
            :fill="true"
            :fillOpacity="0.5"
            fillColor="#41b782"
          />
          <l-rectangle
            :lat-lngs="[
              [46.334852, -1.509485],
              [46.342596, -1.328731],
              [46.241487, -1.190568],
              [46.234787, -1.358337],
            ]"
            :fill="true"
            color="#35495d"
          />
          <l-rectangle
            :bounds="[
              [46.334852, -1.190568],
              [46.241487, -1.090357],
            ]"
          >
            <l-popup> lol </l-popup>
          </l-rectangle>
        </l-map>
      </div>
      <div class="feedback-input">
        <h1>Feedback</h1>
        <form>
          <div class="feedback-name">
            <input placeholder="First" />
            <input placeholder="Last" />
          </div>
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  data() {
    return {
      zoom: 2,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.section-container {
  background-color: #f3f6f4;
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-title {
  text-align: center;
  margin-bottom: 20px;
  .font-awesome {
    font-size: 40px;
    font-weight: 100;
    margin-bottom: 20px;
  }
  h1 {
    margin-top: 0px;
    margin-bottom: 8px;
  }
}
.h1-text {
  font-weight: 100;
  margin-bottom: 0;
  color: #656665;
}
.section-search {
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0px 10px;
  outline: none;
  border-radius: 10px;
  -webkit-box-shadow: 0 rgba(70, 74, 80, 0.3);
  -moz-box-shadow: 0 rgba(70, 74, 80, 0.3);
  box-shadow: 0 rgba(70, 74, 80, 0.3);
  border: 1px solid #d6d6d6;
  background: white;
  transition: 0.5s all;
  input {
    height: 40px;
    width: 100%;
    height: 30px;
    background: transparent;
    outline: none;
    border: 0;
    margin-left: 10px;
    &::placeholder {
      color: #a9a9a8;
    }
  }
  .awesome-search {
    color: #a9a9a8;
  }
}
.section-feedback {
  display: flex;
  justify-content: center;
}
.feedback-maps {
  width: 400px;
  z-index: 0;
  @media only screen and (max-width: 991px) {
    width: 300px;
  }
}
.feedback-input {
  // display: none;
  background: white;
  width: 400px;
  padding: 0px 20px 20px 40px;
  @media only screen and (max-width: 991px) {
    width: 300px;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      height: 40px;
      font-size: 18px;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 0px 5px;
      outline: none;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      -webkit-box-shadow: 0 rgba(70, 74, 80, 0.3);
      -moz-box-shadow: 0 rgba(70, 74, 80, 0.3);
      box-shadow: 0 rgba(70, 74, 80, 0.3);
    }
    textarea {
      height: 120px;
      resize: none;
      font-size: 18px;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 0px 5px;
      outline: none;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      -webkit-box-shadow: 0 rgba(70, 74, 80, 0.3);
      -moz-box-shadow: 0 rgba(70, 74, 80, 0.3);
      box-shadow: 0 rgba(70, 74, 80, 0.3);
    }
    button {
      height: 40px;
      width: 90px;
      background-color: #428ecb;
      border: 1px solid #428ecb;
      border-radius: 5px;
      color: #ffff;
      cursor: pointer;
      &:hover {
        background-color: #3679af;
      }
      &:active {
        background-color: #326fa2;
      }
    }
  }
  .feedback-name {
    display: flex;
    align-items: center;
    input {
      width: 50%;
    }
  }
}
</style>
