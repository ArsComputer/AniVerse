export function createErrorState(errMessage, className, container) {
  const errMessageElement = `<p class="${className}">Terjadi Error: ${errMessage}</p>`;
  container.innerHTML = errMessageElement;
}
