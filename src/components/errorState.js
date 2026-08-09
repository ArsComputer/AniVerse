export function createErrorState(errMessage, container, ...className) {
  const errMessageElement = `
  <p class="${className.join(" ")}">Terjadi Error: ${errMessage}</p>`;
  
  container.innerHTML = errMessageElement;
}
