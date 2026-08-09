export function createEmptyState(container, ...className) {
  const emptyStateElement = `
    <div class="${className.join(" ")}"
      >Anime Tidak Ditemukan :(
    </div>
  `;

  container.innerHTML = emptyStateElement;
}
