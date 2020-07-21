export const debounce = (fn: () => void, ms: number) => {
  let timer: NodeJS.Timeout | null;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, ms);
  };
};
