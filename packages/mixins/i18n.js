/* mixin -> i18n */
import { get, camelize } from '../utils';

export default {
  computed: {
    $t() {
      // 组件名称
      const { name } = this.$options;
      const prefix = name ? camelize(name) + '.' : '';

      if (process.env.NODE_DEV !== 'productiond' && !this.$vantMessages) {
        console.warn('[Vant] Locale not correctly registered.');
        return () => '';
      }

      const messages = this.$vantMessages[this.$vantLang];
      return (path, ...args) => {
        const message = get(messages, prefix + path) || get(messages, path);
        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
};