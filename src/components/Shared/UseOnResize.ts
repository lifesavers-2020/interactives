import { useEffect } from "react";
import { debounce } from "./Utils";

export const useOnResize = (fn: () => void, ms: number) =>
  useEffect(() => {
    const onResize = debounce(fn, ms);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [fn, ms]);
