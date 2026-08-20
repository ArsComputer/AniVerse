import { getAnimeDetailById } from "../api/animeDetailById.js";

export default async function buildAnimeDetail(id) {
  console.log(await getAnimeDetailById(id));
  return `
  <div>
  <h2>Detail Anime ${id}</h2>
  </div>
  `;
}
