export function createLoadingState(className, container) {
  const loadingElement = `<p class="${className}">Loading...</p>`;
  container.innerHTML = loadingElement;
}
