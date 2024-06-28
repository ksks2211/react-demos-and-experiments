import { Box, styled } from "@mui/material";

interface Overlay07Props {
  toggle?: () => void;
  isVisible: boolean;
}

const StyledOverlay = styled(Box)<Pick<Overlay07Props, "isVisible">>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.isVisible ? "rgba(0, 0, 0, 0.5)" : "rgba(0,0,0,0)"};

  z-index: 99;
  animation: ${(props) =>
    props.isVisible ? "fade-in 0.5s forwards" : "fade-out 0.5s forwards"};

  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};

  @keyframes fade-in {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  @keyframes fade-out {
    from {
      background-color: rgba(0, 0, 0, 0.4);
    }
    to {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

export default function Overlay07({ isVisible, toggle }: Overlay07Props) {
  return (
    <StyledOverlay
      isVisible={isVisible}
      onClick={isVisible ? toggle : undefined}
    />
  );
}
