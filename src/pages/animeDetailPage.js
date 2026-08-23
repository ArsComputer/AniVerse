import { getAnimeDetailById } from "../api/animeDetailById.js";

export default async function buildAnimeDetail(id) {
  const animeData = await getAnimeDetailById(id);

  const {
    title,
    score,
    status,
    episodes,
    type,
    studios,
    synopsis,
    broadcast,
    images: {
      webp: {
        image_url
      }
    }
  } = animeData;

  const animeStudio = studios.map((studio) => studio.name);

  // console.log(animeData);
  // console.log(animeStudio)

  return `
  <div class="anime-container">
    <div class="judul-container">
      <h2>Detail Anime</h2>
    </div>

    <div class="detail-container">
      <div class="detail-head">
        <div class="detail__image">
          <img src="${image_url}">
        </div>

        <div class="detail__info">
          <h2>${title}</h2>
          <p><b>Type:</b> ${type}</p>
          <p><b>Studio:</b> ${animeStudio.join(", ")}</p>
          <p><b>Score:</b> ${score}</p>
          <p><b>Episodes Aired:</b> ${episodes}</p>
          <p><b>Status:</b> ${status}</p>
          <p><b>Update:</b> ${broadcast.day}</p>
        </div>
      </div>

      <div class="detail-synopsis">
        <h3>Sinopsis</h3>
        <p>${synopsis}</p>
      </div>
    </div>
  </div>
  `;
}
