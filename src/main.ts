import { createApp } from "vue";
import "@/assets/styles/base.scss";
import { router } from "@/router";
import App from "./App.vue";
import { createYmaps } from "vue-yandex-maps";

const maps = createYmaps({
	apikey: import.meta.env.VITE_YANDEX_APIKEY
});


const Vue = createApp(App);

Vue.use(router);
Vue.use(maps)

Vue.mount('#app');
