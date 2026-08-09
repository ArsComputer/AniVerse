export function createLoadingState(container, ...className) {
  const loadingElement = `
  <p class="${className.join(" ")}"
    style="
      text-align: center;
      position: absolute;
      inset: 1.6rem 0 0;
    ">Loading...</p>
  `;

  container.innerHTML = loadingElement;
}
