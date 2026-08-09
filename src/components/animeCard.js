export function createAnimeCard(anime, container, ...className) {
  const {
    title,
    images: {
      webp: { image_url },
    },
  } = anime;

  const animeCard = `
    <div class="${className.join(" ")}">
      <div class="${className[0]}__image">
        <img src="${image_url}" alt="${title}" />
      </div>

      <div class="${className[0]}__details">
        <span class="${className[0]}__title">${title}</span>
      </div>
    </div>
    `;

  container.insertAdjacentHTML("beforeend", animeCard);
}
