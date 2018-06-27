import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './DocsApp';
import routes from './router';
import VantDoc from 'vant-doc';
import progress from 'nprogress';
import { isMobile } from './utils';
import './components/nprogress.css';

Vue.use(VueRouter).use(VantDoc);

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

// 路由跳转前
router.beforeEach((route, redirect, next) => {
  // 手机预览的 demo 页面要 replace 路由地址
  if (isMobile) {
    location.replace('mobile.html' + location.hash);
  }
  // 开启加载进度条
  progress.start();
  // 更改页面 title
  document.title = route.meta.title || document.title;
  next();
});

// 路由加载后
router.afterEach(() => {
  // 关闭进度条
  progress.done();
  // 页面滚动到最顶步
  window.scrollTo(0, 0);
  // 同步主页面和 iframe 的路由状态
  Vue.nextTick(() => window.syncPath());
});

// 把 vueRouter 赋给 window，使得 iframe 中也能到 vue-router
window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({ // eslint-disable-line
  render: h => h(app),
  router,
  el: '#app'
});
