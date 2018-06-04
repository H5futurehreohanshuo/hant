const fs = require('fs');
const path = require('path');

// 输出 packages 下面所有的文件夹 (除了 excludes 中的元素)
module.exports = function() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../../packages'));
  const excludes = ['index.js', 'vant-css', 'mixins', 'utils', '.DS_Store'];
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1);
}