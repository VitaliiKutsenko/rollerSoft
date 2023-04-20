export const debounce = <T extends Function>(func: T, ms = 300) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...args);
    }, ms);
  };
};
