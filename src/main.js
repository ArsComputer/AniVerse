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

    <div class="cari-container">
      <label for="input-cari" class="icon" id="menu-cari">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      </label>

      <div class="cari-wrapper">
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
    </div>
  </nav>
</header>

<main>
  <div class="anime-container">
    <div class="judul-container">
      <h3>Hasil Pencarian</h3>
    </div>

    <div class="daftar-anime" id="daftar-anime">
      <div class="muted state"
        >Cari Anime Favoritmu di Kotak pencarian
      </div>
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

  createLoadingState(daftarAnimeContainer, 'loading', 'muted', 'state');

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
      createEmptyState(daftarAnimeContainer, 'muted', 'state');
    }

    // Display each anime card
    animeList.data.forEach((anime) => {
      createAnimeCard(anime, daftarAnimeContainer, 'anime-card');
    });

  } catch (error) {
    if (error.name === "AbortError") return;

    console.error("Gagal:", error);
    createErrorState(error.message, daftarAnimeContainer, "muted", "state");
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

const menuCari = document.getElementById('menu-cari');
const cariWrapper = document.querySelector('.cari-wrapper');

menuCari.addEventListener('click', () => {
  // cariWrapper.style.display = 'flex';
  cariWrapper.classList.toggle('cari-open');
})