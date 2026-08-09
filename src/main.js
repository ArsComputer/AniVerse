import "./style.css";
import { getAnime } from "./api/anime.repository.js";
import { debounce } from "./utils/debounce.js";
import { createAnimeCard } from "./components/animeCard.js";
import { createErrorState } from "./components/errorState.js";
import { createLoadingState } from "./components/loadingState.js";
import { createEmptyState } from "./components/emptyState.js";

document.querySelector("#app").innerHTML = `
<header>
  <nav class="navbar">
    <div class="logo">AniVerse</div>
    
    .

    <div class="cari-container">
    <form class="form-cari" role="search">
      <input
        type="text"
        placeholder="Cari Anime..."
        class="input-cari" id="input-cari"
        aria-label="Cari Anime"
      />
      <button type="submit" class="btn-cari" id="btn-cari">Cari</button>
    </form>
    </div>
  </nav>
</header>

<main>
  <div class="anime-container">
    <div class="judul-container">
      <h3>Hasil Pencarian</h3>
    </div>

    <div class="daftar-anime" id="daftar-anime">
      <span class="muted"
        style="
          text-align: center;
          position: absolute;
          inset: 1.6rem 0 0;
        ">Cari Anime Favoritmu di Kotak pencarian</span>
      <!-- Daftar anime akan ditampilkan secara dinamis di sini -->
    </div>
  </div>
</main>
`;

const inputCari = document.querySelector(".input-cari");
const btnCari = document.querySelector(".btn-cari");

const daftarAnimeContainer = document.querySelector("#daftar-anime");

const cariDebounce = debounce(searchAnime, 500);
let controller;

async function searchAnime(keyword) {
  if (!keyword || keyword.length <= 2) return;

  createLoadingState(daftarAnimeContainer, 'muted', 'loading');

  if (controller) {
    controller.abort();
  }

  controller = new AbortController();

  try {
    const animeList = await getAnime(keyword, controller.signal);
    console.log(animeList.data)

    // Clear the container before adding new results
    daftarAnimeContainer.innerHTML = "";

    if (animeList.data.length === 0) {
      createEmptyState(daftarAnimeContainer, 'muted');
    }

    // Display each anime card
    animeList.data.forEach((anime) => {
      createAnimeCard(anime, daftarAnimeContainer, 'anime-card');
    });

  } catch (error) {
    if (error.name !== "AbortError") return;

    console.error("Gagal:", error);
    createErrorState(error.message, daftarAnimeContainer, 'muted');
  }
}

inputCari.addEventListener('input', (e) => {
  e.preventDefault();
  cariDebounce(inputCari.value.trim());
});

btnCari.addEventListener('click', (e) => {
  e.preventDefault();
  searchAnime(inputCari.value.trim());
});