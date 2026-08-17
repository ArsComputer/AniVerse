import homepage from "./homePage.js";
import buildAnimeDetail from "./animeDetailPage.js"
import notfoundPage from "./notfoundPage.js";

export function renderRouter(route, container) {
  console.log('ini render router', route)

  switch (route.type) {
    case "home":
      container.innerHTML = homepage();
      break;
    case "animeDetail":
      container.innerHTML = buildAnimeDetail(route.id);
      break;
    case 'notfound':
    default:
      container.innerHTML = notfoundPage();
      break;
  }
}