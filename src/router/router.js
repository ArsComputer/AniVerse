import { renderRouter } from "../pages/renderRouter.js";

let currRoute = window.location.pathname;

export function createRouter(container = document.querySelector('main')) {
  return {
    init() {
      document.addEventListener('click', (e) => {
        const target = e.target.closest('a');

        if (!target) return;

        const href = target.getAttribute('href');

        if (!href.startsWith('/')) return;
        e.preventDefault();

        const route = this.getRoute(href);
        this.navigateTo(route);
      });

      window.addEventListener('popstate', (e) => {
        const route = this.getRoute();
        this.navigateTo(route, false);
      })
    },

    getRoute(pathname = window.location.pathname) {
      const parts = pathname.split('/');

      // console.log(parts)
      if (parts[2] === 'anime' && parts[3]) return {
        type: 'animeDetail',
        id: +parts[3],
        targetUrl: pathname,
      }

      if (parts[1] === 'AniVerse' && !parts[2]) return {
        type: 'home',
        targetUrl: pathname,
      }

      return {
        type: 'notfound',
        targetUrl: pathname,
      }
    },

    navigateTo(route, addToHistory = true) {
      const targetUrl = route.targetUrl;
      currRoute = targetUrl;

      // console.log('navigating to', route);
      if (addToHistory)
        history.pushState({}, '', targetUrl);

      // console.log('saat ini berada di', currRoute);
      renderRouter(route, container);
    }
  }
}