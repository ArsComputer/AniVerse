export function createEmptyState(className, container) {
  const emptyStateElement = `<p class="${className}">Anime Tidak Ditemukan :(</p>`;
  container.innerHTML = emptyStateElement;
}
