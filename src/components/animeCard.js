import { truncate } from "../utils/truncate.js";

export function createAnimeCard(anime, container, ...className) {
  const {
    mal_id,
    title,
    images: {
      webp: { image_url },
    },
  } = anime;

  const animeCard = `
    <a class="${className.join(" ")}" href="/AniVerse/anime/${mal_id}">
      <div class="${className[0]}__image">
        <img src="${image_url}" alt="${title}" />
      </div>

      <div class="${className[0]}__details">
        <h3 class="${className[0]}__title">${truncate(title)}</h3>
      </div>
    </a>
  `;

  container.insertAdjacentHTML("beforeend", animeCard);
}
