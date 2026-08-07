const baseUrl = "https://api.tenrai.org/v1";

export async function getAnime(keyword, signal) {
  const res = await fetch(`${baseUrl}/anime?q=${keyword}`, { signal });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return await res.json();
}
