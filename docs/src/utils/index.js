/**
 * iframe 加载完成后的执行函数
 * @param {Element} iframe iframe DOM 元素
 * @param {Function} callback 回调函数
 */
function iframeReady(iframe, callback) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const interval = () => {
    if (iframe.contentWindow.changePath) {
      callback();
    } else {
      setTimeout(() => {
        interval();
      }, 50);
    }
  }

  if (doc.readyState === 'complete') {
    interval();
  } else {
    iframe.onload = interval;
  }
}

const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipad|ipod|android/.test(ua);

export {
  isMobile,
  iframeReady
}
