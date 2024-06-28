import { throttle } from "lodash-es";
import { useEffect, useState } from "react";

export function useScrollDownVisibility() {
  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight / 2 <= window.scrollY) {
        if (prevScrollY + 15 < window.scrollY) {
          setVisible(false);
        } else if (prevScrollY - 15 > window.scrollY) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      setPrevScrollY(window.scrollY);
    };

    const throttledHandler = throttle(handleScroll, 1000);
    window.addEventListener("scroll", throttledHandler);
    return () => {
      window.removeEventListener("scroll", throttledHandler);
    };
  }, [prevScrollY]);

  return { visible, setVisible };
}
