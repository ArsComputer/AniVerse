export function createErrorState(errMessage, container, ...className) {
  const errMessageElement = `
  <p class="${className.join(" ")}"
    style="
      text-align: center;
      position: absolute;
      inset: 1.6rem 0 0;
    "
    >Terjadi Error: ${errMessage}</p>`;

  container.innerHTML = errMessageElement;
}
