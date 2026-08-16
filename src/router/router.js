let currRoute = window.location.pathname;

export function createRouter(container) {
  return {
    init() {
      document.addEventListener('click', (e) => {
        const target = e.target.closest('a');

        if (!target) return;

        const href = target.getAttribute('href');

        if (href.startsWith('/')) {
          e.preventDefault();
          alert('Navigating to: ' + href);
        }
      });
    }
  }
}