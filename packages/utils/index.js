const camelizeRE = /-(\w)/g;
/**
 * 将横杠连接改为驼峰式，如 address-edit -> addressEdit
 * @param {String} str 被转换的字符串
 */
function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export {
  camelize
}