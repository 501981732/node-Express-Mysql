// (function (doc, win) {
//      var docEl = doc.documentElement,
//           resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//           recalc    = function () {
//                  var clientWidth = docEl.clientWidth;
//                  if (clientWidth>=640) {
//                     clientWidth = 640;
//                  };
//                  if (!clientWidth) return;
//                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
//           };
//           if (!doc.addEventListener) return;
//           win.addEventListener(resizeEvt, recalc, false);
//           doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

(function (doc,win) {
    // var doc = document;
    var docEl = doc.documentElement;
    // var win = window;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        /*if (width > 480) {
         width = 480;
         }*/
        // 按照640比例可以直接用设计图尺寸除100
        var rem = width / 640 * 100;
        docEl.style.fontSize = rem + 'px';
    }

    var tid;
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();
})(document,window);