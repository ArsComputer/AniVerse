export function debounce(fn, delay) {
  let timer;

  return {
    setDebounce(...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    },

    cancelDebounce(...args) {
      clearTimeout(timer);

      timer = null;

      fn.apply(this, args);
    }
  };
}
