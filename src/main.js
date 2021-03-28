import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routers from './router'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter(
    {
      mode : 'history',
      routes : routers
    }
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
