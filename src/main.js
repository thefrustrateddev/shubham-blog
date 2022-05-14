import { createApp } from "vue";
import AppLayout from "./layouts/Base.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import plugin from "./plugins";
import Paginate from "vuejs-paginate-next";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();

import "./styles/style.scss";

createApp(AppLayout)
  .use(store)
  .use(router)
  .use(plugin)
  .use(Paginate)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
