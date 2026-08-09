export function createEmptyState(container, ...className) {
  const emptyStateElement = `
  <p class="${className.join(" ")}"
    style="
      margin: auto;
      text-align: center;
    ">Anime Tidak Ditemukan :(</p>
  `;
  
  container.innerHTML = emptyStateElement;
}
