export async function getAnimeDetailById(id) {
  const res = await fetch(`https://api.tenrai.org/v1/anime/${id}/full`);

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return await res.json();
}