import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import throttle from "lodash-es/throttle";

interface HeaderProps {
  visible?: boolean;
}

const StyledHeader04 = styled(Box)<HeaderProps>`
  background-color: lightblue;
  min-height: var(--header-height);
  width: 100%;

  /* position: absolute; */
  position: sticky;
  top: 0;
  z-index: 999;
  transition: transform 0.3s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${(props) =>
    props.visible
      ? "translateY(0)"
      : "translateY(calc(-1 * var(--header-height)))"};
`;

export default function Header04() {
  const [visible, setVisible] = useState(true);

  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight / 2 <= window.scrollY) {
        if (prevScrollY + 15 < window.scrollY) {
          setVisible(false);
        } else if (prevScrollY - 30 > window.scrollY) {
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

  return <StyledHeader04 visible={visible}>Hided Header</StyledHeader04>;
}
