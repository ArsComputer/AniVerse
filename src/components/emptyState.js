export function createEmptyState(container, keyword, ...className) {
  const emptyStateElement = document.createElement('div');
  const pDetail = document.createElement('p');

  emptyStateElement.classList.add(...className);

  const emptyStateDetails = `
    <br>
    <p>Coba periksa ejaan atau gunakan kata kunci lain</p>
  `;

  pDetail.textContent = `Anime "${keyword}" Tidak Ditemukan :(`;

  emptyStateElement.appendChild(pDetail);
  emptyStateElement.insertAdjacentHTML('beforeend', emptyStateDetails);

  container.appendChild(emptyStateElement);
}
