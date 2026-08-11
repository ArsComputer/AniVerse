export function btnDelay(target, delay = 1000) {
  let timer;

  return {
    setDelay() {
      target.disabled = true;

      timer = setTimeout(() => target.disabled = false, delay);
    },

    clearDelay() {
      clearTimeout(timer);
      
      target.disabled = false;
    }
  }
}