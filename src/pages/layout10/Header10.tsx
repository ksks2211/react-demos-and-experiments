import { Box, styled } from "@mui/material";
import Navigation10 from "./Navigation";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const StyledHeaderWrapper10 = styled(Box)`
  background-color: lightblue;
  width: 100%;
  position: sticky;
  top: 0;
`;

const StyledHeader10 = styled(Box)`
  position: relative;

  background-color: purple;
  width: 100%;
  min-height: var(--header-height);
  flex-shrink: 0;

  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Header10Props {
  isNavigationOpen: boolean;
  toggleNavigation: () => void;
}

export default function Header10({
  isNavigationOpen,
  toggleNavigation,
}: Header10Props) {
  useLockBodyScroll(isNavigationOpen);

  return (
    <StyledHeaderWrapper10>
      <StyledHeader10>
        <span onClick={toggleNavigation}>header</span>
        {isNavigationOpen ? "Open" : "Close"}
      </StyledHeader10>

      <Navigation10 isOpen={isNavigationOpen} />
    </StyledHeaderWrapper10>
  );
}
