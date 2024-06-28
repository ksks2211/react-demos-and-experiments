import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { useScrollDownVisibility } from "../../hooks/useScroll";

const StyledBottomBar = styled(Box)<{ visible: boolean }>`
  background-color: lightgreen;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 53px;

  transition: opacity ${(props) => (props.visible ? ".3s" : ".2s")} ease-out;

  opacity: ${(props) => (props.visible ? "1" : "0.65")};

  &:hover {
    opacity: 1;
  }
`;

export default function BottomBar13() {
  const { visible } = useScrollDownVisibility();

  return <StyledBottomBar visible={visible}>bottom-bar</StyledBottomBar>;
}
