import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ECharts from 'vue-echarts'
import * as echarts from 'echarts';

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts; // 将 ECharts 添加到 Vue 的原型上
Vue.use(ElementUI);
Vue.component('v-chart', ECharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
