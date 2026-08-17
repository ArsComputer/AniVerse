import homepage from "./homePage.js";
import notfoundPage from "./notfoundPage.js";

export function renderRouter(route, container) {
  switch (route.type) {
    case "home":
      container.innerHTML = homepage();
      break;
    case "animeDetail":
      container.innerHTML = "<h1>Anime detail nih</h1>";
      break;
    case 'notfound':
    default:
      container.innerHTML = notfoundPage();
      break;
  }
}