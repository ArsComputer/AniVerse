import { getAnimeDetailById } from "../api/animeDetailById.js";

export default function buildAnimeDetail(id) {
  return `
  <div>
  <h2>Detail Anime ${id}</h2>
  </div>
  `;
}

// console.log(await getAnimeDetailById(123));