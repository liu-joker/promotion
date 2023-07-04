var fun = function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
  
        //这里是假设在768px宽度设计的情况下，1rem = 16px；
        //可以根据实际需要修改
        docEl.style.fontSize = 16 * (clientWidth / 750) + 'px';
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  }
  
  fun(document, window);