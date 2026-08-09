export function createLoadingState(className, container) {
  const loadingElement = `<p class="${className}" style="margin: auto">Loading...</p>`;
  container.innerHTML = loadingElement;
}
