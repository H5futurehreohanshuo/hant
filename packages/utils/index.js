const camelizeRE = /-(\w)/g;
/**
 * 将横杠连接改为驼峰式，如 address-edit -> addressEdit
 * @param {String} str 被转换的字符串
 */
function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

/**
 * 判断 value 是否有定义
 * @param {Any} value 需要判断的值
 */
function isDef(value) {
  return value !== undefined && value !== null;
}

/**
 * 判断 x 是否是对象
 * @param {Any} x 需要判断的值
 */
function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export {
  camelize,
  isDef,
  isObj
}