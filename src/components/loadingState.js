export function createLoadingState(container, ...className) {
  const loadingElement = `
    <div class="${className.join(" ")}"
      >Loading...
    </div>
  `;

  container.innerHTML = loadingElement;
}
