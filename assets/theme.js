(function () {
  function getStored() {
    try { return localStorage.getItem('scriptedot-theme'); } catch (e) { return null; }
  }
  function setStored(theme) {
    try { localStorage.setItem('scriptedot-theme', theme); } catch (e) {}
  }
  function current() {
    var stored = getStored();
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  function updateButton(btn) {
    var isDark = current() === 'dark';
    btn.textContent = isDark ? '☀ Light' : '🌙 Dark';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    updateButton(btn);
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      setStored(next);
      apply(next);
      updateButton(btn);
    });
  });
})();
