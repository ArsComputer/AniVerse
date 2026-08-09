export function createErrorState(errMessage, container, ...className) {
  const errMessageElement = `
    <div class="${className.join(" ")}"
      >Terjadi Error: ${errMessage}
    </div>
  `;

  container.innerHTML = errMessageElement;
}
