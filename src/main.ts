import { createApp } from "vue";
import "@/assets/styles/base.scss";
import { router } from "@/router";
import App from "./App.vue";
import { createYmaps } from "vue-yandex-maps";

const maps = createYmaps({
	apikey: "f6c3579b-1f4a-4d23-8eb6-cc071226d4c0" 
});


const Vue = createApp(App);

Vue.use(router);
Vue.use(maps)

Vue.mount('#app');
