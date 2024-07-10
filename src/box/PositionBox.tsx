import { Box, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const StyledPositionBox = styled(Box)`
  width: 50%;
  min-height: 40vh;
  background-color: lightsalmon;
`;

export default function PositionBox() {
  const boxRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    viewportLeft: 0,
    viewportTop: 0,
    viewportRight: 0,
    viewportBottom: 0,
  });

  const updatePosition = () => {
    const element = boxRef.current;

    if (element === null) return;

    // DOMRect
    const rect = element.getBoundingClientRect();

    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    setPosition({
      left: rect.left + scrollLeft,
      top: rect.top + scrollTop,
      right: rect.right + scrollLeft,
      bottom: rect.bottom + scrollTop,
      width: rect.width,
      height: rect.height,
      viewportLeft: rect.left,
      viewportTop: rect.top,
      viewportRight: rect.right,
      viewportBottom: rect.bottom,
    });
  };

  useEffect(() => {
    updatePosition();

    // Add event listeners
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <StyledPositionBox ref={boxRef}>
      <ul>
        <li>Page Position</li>
        <li>Left : {position.left}</li>
        <li>Right : {position.right}</li>
        <li>Top : {position.top}</li>
        <li>Bottom : {position.bottom}</li>
      </ul>
      <hr />
      <ul>
        <li>Viewport Position</li>
        <li>vleft : {position.viewportLeft}</li>
        <li>vright : {position.viewportRight}</li>
        <li>vtop : {position.viewportTop}</li>
        <li>vbottom : {position.viewportBottom}</li>
      </ul>
      <hr />
      <ul>
        <li>width : {position.width}</li>
        <li>height : {position.height}</li>
      </ul>
    </StyledPositionBox>
  );
}
