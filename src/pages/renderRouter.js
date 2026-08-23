import homepage from "./homePage.js";
import buildAnimeDetail from "./animeDetailPage.js";
import notfoundPage from "./notfoundPage.js";
import { createLoadingState } from "../components/loadingState.js";
import { createErrorState } from "../components/errorState.js";

export async function renderRouter(route, container) {
  // console.log('ini render router', route)
  
  createLoadingState(container,
    "loading",
    'loading--page',
    "page-state",
    "anime-container",
    'muted'
  );

  try {
    switch (route.type) {
      case "home":
        container.innerHTML = homepage();
        break;
  
      case "animeDetail":
        container.innerHTML = await buildAnimeDetail(route.id);
        break;
  
      case "notfound":
      default:
        container.innerHTML = notfoundPage();
        break;
    }

  } catch (err) {
    createErrorState(err.message, container,
      "loading",
      "loading--page",
      "page-state",
      "anime-container",
      "muted",
    );
  }
}
