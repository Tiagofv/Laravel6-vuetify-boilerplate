import Vue from "vue"
import Vuetify from "vuetify"
import VueRouter from "vue-router"
import routes from "./routes"
import axios from "axios"
import VueAxios from "vue-axios";
import Store from "./store/"
import pt from 'vuetify/es5/locale/pt'
Vue.use(Vuetify);
Vue.use(VueRouter)
Vue.use(VueAxios, axios);

axios.defaults.baseURL =    baseUrl;
let props = {
    lang: {
        locales: { pt },
        current: 'pt',
    },
    theme: {
        themes: {
          light: {
            primary: '#019cde',
            secondary: '#e8639a',
          },
        },
      }
}

let app = new Vue({
    el: "#app",
    router: routes,
    vuetify: new Vuetify(props),
    store: Store
});
