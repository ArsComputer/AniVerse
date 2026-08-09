export function createAnimeCard(anime, container, ...className) {
  const {
    title,
    images: {
      webp: { image_url },
    },
  } = anime;

  const animeCard = `
    <div class="${className}">
      <div class="${className}__image">
        <img src="${image_url}" alt="${title}" />
      </div>
      <span class="${className}__title">${title}</span>
    </div>
    `;

  container.insertAdjacentHTML("beforeend", animeCard);
}
