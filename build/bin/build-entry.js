const Components = require('./get-components')();
/**
 * fs-extra 添加了未包含在本地 fs 模块中的文件系统方法，并向 fs 方法添加 promise 支持。
 * 它也用 graceful-fs 来防止 EMFILE 错误
 * 它应该是一个 fs 的替代品
 */
const fs = require('fs-extra');
/* 更快的 node-glob */
const glob = require('fast-glob');
const path = require('path');
/* 将短划线/点/下划线/空格分隔的字符串转换为 UpperCamelCase：foo-bar→FooBar */
const uppercamelize = require('uppercamelcase');
// 版本号
const version = process.env.VERSION || require('../../package.json').version;
const tips = '// This file is auto generated by build/bin/build-entry.js';
// 项目的根路径
const root = path.join(__dirname, '../../');
// 所有某一个文件或文件夹的绝对路径
const join = dir => path.join(root, dir);

function buildHantEntry() {
  const uninstallComponent = [
    'Lazyload',
    'Waterfall'
  ];

  const importList = Components.map(name => `import ${uppercamelize(name)} from './${name}';`);
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  const intallList = exportList.filter(name => !~uninstallComponent.indexOf(uppercamelize(name)));
  const content = `${tips}
  ${importList.join('\n')}

  const version = '${version}';
  const components = [
    ${intallList.join(',\n  ')}
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
    ${exportList.join(',\n  ')}
  }

  export default {
    install,
    version,
  };
  `;

  fs.writeFileSync(path.join(__dirname, '../../packages/index.js'), content);
}
buildHantEntry()