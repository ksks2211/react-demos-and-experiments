import { Box, styled } from "@mui/material";
import Header10 from "./Header10";
import Main10 from "./Main10";
import { useState } from "react";

const StyledLayout10 = styled(Box)`
  background-color: orange;
  height: 200vh;
  width: 100%;

  position: relative;
`;

// Fixed Header + Main
export default function Layout10() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen((prev) => !prev);
  };

  return (
    <StyledLayout10>
      <Header10
        isNavigationOpen={isNavigationOpen}
        toggleNavigation={toggleNavigation}
      />
      <Main10 />
    </StyledLayout10>
  );
}
