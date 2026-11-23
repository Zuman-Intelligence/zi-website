// Agent faces blink once on load, then whenever the visitor scrolls (at most every 1.4s).
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var faces = document.querySelectorAll('.zi-face');
  var last = 0;

  function blink() {
    faces.forEach(function (face) {
      face.classList.remove('is-blinking');
      void face.getBoundingClientRect(); // restart the animation
      face.classList.add('is-blinking');
    });
  }

  window.addEventListener('scroll', function () {
    var now = Date.now();
    if (now - last < 1400) return;
    last = now;
    blink();
  }, { passive: true });

  setTimeout(blink, 1100);
})();

// Footer year
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
