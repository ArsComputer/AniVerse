export function createLoadingState(container, ...className) {
  const loadingElement = `
    <div class="${className.join(" ")}">
      <div class="${className[0]}__spinner"></div>
    </div>
  `;

  container.innerHTML = loadingElement;
}
