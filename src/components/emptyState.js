export function createEmptyState(container, keyword, ...className) {
  const emptyStateElement = `
    <div class="${className.join(" ")}"
      ><p>Anime &quot;${keyword}&quot; Tidak Ditemukan :(</p>
      <br>
      <p>Coba periksa ejaan atau gunakan kata kunci lain</p>
    </div>
  `;

  container.innerHTML = emptyStateElement;
}
