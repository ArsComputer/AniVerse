export function createLoadingState(container, ...className) {
  const loadingElement = `
  <p class="${className.join(" ")}"
    style="
      margin: auto;
    ">Loading...</p>
  `;
  
  container.innerHTML = loadingElement;
}
