export function createAnimeCard(anime, className, container) {
  const {
    title,
    images: {
      webp: { image_url },
    },
  } = anime;

  const animeCard = `
    <div class="${className}">
        <img src="${image_url}" alt="${title}" />
        <h2>${title}</h2>
    </div>
    `;

  container.insertAdjacentHTML("beforeend", animeCard);
}
