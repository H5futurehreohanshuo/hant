import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import routes from './router';
import progress from 'nprogress';

// import '../../packages/vant-css/src/index.css';
// import '../../packages/vant-css/src/icon-local.css';
import 'vant-doc/src/helper/touch-simulator';
import './components/nprogress.css';

const router = new VueRouter({
  mode: 'hash',
  routes: routes(true)
});

router.beforeEach((route, redirect, next) => {
  progress.start();
  next();
});

router.afterEach(() => {
  progress.done();
  if (router.currentRoute.name) {
    window.scrollTo(0, 0);
  }
  // 如果存在重定向，即为重定向来源的路由的名字。
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath());
  }
});

window.vueRouter = router;

if (process.env.NODE_DEV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  render: h => h(App),
  router,
  el: '#app'
});
