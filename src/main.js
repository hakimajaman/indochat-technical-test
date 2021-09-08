import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faChartLine,
  faClipboard,
  faGripLines,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faChartLine, faClipboard, faGripLines);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
