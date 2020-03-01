import VueRouter from 'vue-router'
//Components
import Login from "./components/auth/Login.vue";
import Home from "./components/Home.vue";
import Codirc from "./components/codirc/Codirc.vue";
 
const routes = [
        {
            path: "/",
            component: Login,
            name: "login",
        },
        {
            path: "/home",
            component: Home,
            name: "home",
            children: [
                {
                    path: '/codirc/inscrever',
                    component: Codirc,
                    name: 'codirc'
                }
            ]
        }
]


const router = new VueRouter({
    history: true,
    mode: 'history',
    routes
  })

  export default router;