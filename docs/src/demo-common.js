import { camelize } from '../../packages/utils';

// TODO: 还有很多内容需要完善

// 改造组件的 component 和 name，同时收集需要做国际化的部分
export function wrapper(promise, name) {
  return promise.then(component => {
    component = component.default;
    name = 'demo-' + name;
    component.name = name;
    const { i18n } = component;
    if (i18n) {
      const formattedI18n = {};
      const camelizedName = camelize(name);
      Object.keys(i18n).forEach(key => {
        formattedI18n[key] = { [camelizedName]: i18n[key] };
      });
      Locale.add(formattedI18n);
    }
    return component;
  });
}