export function createEmptyState(container, ...className) {
  const emptyStateElement = `
  <p class="${className.join(" ")}"
    style="
      text-align: center;
      position: absolute;
      inset: 1.6rem 0 0;
    ">Anime Tidak Ditemukan :(</p>
  `;

  container.innerHTML = emptyStateElement;
}
