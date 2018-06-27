// This file is auto generated by build/bin/build-entry.js
import Actionsheet from './actionsheet';
import Lazyload from './lazyload';
import Locale from './locale';

const version = '1.0.0';
const components = [
  Actionsheet,
  Locale
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Actionsheet,
  Lazyload,
  Locale
}

export default {
  install,
  version,
};
