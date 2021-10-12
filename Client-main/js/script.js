!function () {
  "use strict";
  let f;
  f = (function () {
    return function (a) {
      if (a[0].isIntersecting) {
        document.documentElement.style.setProperty("--b-blur", "0");
      }
    };
  })();

  Object.defineProperty(f, 'p', {
    enumerable: true,
    get: function() {
      return {
        root: null,
        threshold: 0.1,
        rootMargin: '-200px'
      }
    }
  })
  const observer = new IntersectionObserver(f, f.p);
  const screen = document.querySelector('.screen--cover')
  observer.observe(screen);

}();
