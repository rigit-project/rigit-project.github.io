document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('#results-tabs li');
  var panels = document.querySelectorAll('.results-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      var target = tab.querySelector('a').dataset.panel;

      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');

      panels.forEach(function (p) { p.hidden = (p.id !== target); });
    });
  });
});
