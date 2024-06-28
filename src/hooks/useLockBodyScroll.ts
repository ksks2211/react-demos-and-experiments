import { useLayoutEffect } from "react";

const useLockBodyScroll = (lock: boolean) => {
  useLayoutEffect(() => {
    if (lock) {
      // Lock the scroll
      // const originalStyle = window.getComputedStyle(document.body).overflow;

      // document.body.style.overflow = "hidden";
      document.body.classList.add("no-scroll");
      return () => {
        // Unlock the scroll
        // document.body.style.overflow = originalStyle;

        document.body.classList.remove("no-scroll");
      };
    }
  }, [lock]);
};

export default useLockBodyScroll;
