// 滚动浮现动效
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// 作品目录：下滑自动展开 + 上滑自动收起 + 点击标题切换
(function () {
  var items = document.querySelectorAll('.dir-item');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (it) { it.classList.add('open'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        e.target.classList.toggle('open', e.isIntersecting);
      });
    }, { threshold: 0.12 });
    items.forEach(function (it) { io.observe(it); });
  }
})();
document.querySelectorAll('.dir-head').forEach(function (h) {
  h.addEventListener('click', function () { h.parentElement.classList.toggle('open'); });
});
