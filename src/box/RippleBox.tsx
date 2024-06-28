import styled from "@emotion/styled";
import { Box } from "@mui/material";
import toInteger from "lodash-es/toInteger";
import { darken } from "polished";
import { useCallback, useState } from "react";

export interface DropProps {
  key: number;
  style: {
    width: string;
    height: string;
    left: string;
    top: string;
  };
}

export interface RippleBoxProps {
  color: string;
  width?: string;
  height?: string;
}

export const StyledRippleBox = styled(Box)<RippleBoxProps>`
  position: relative;
  overflow: hidden;

  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "500px"};
  background-color: ${(props) => props.color};

  .ripple {
    position: absolute;
    border-radius: 50%;

    transform: scale(0);
    animation: ripple-effect 0.5s ease-out;

    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 300px ${(props) => darken(0.1, props.color)};
  }

  @keyframes ripple-effect {
    to {
      transform: scale(2.8);
      opacity: 0;
    }
  }
`;

export default function RippleBox({ color, width, height }: RippleBoxProps) {
  const [drops, setDrops] = useState<DropProps[]>([]);

  const createDrop = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const length = Math.max(rect.width, rect.height);

      rect.left;
      rect.top;

      const newDrop: DropProps = {
        key: Date.now(),
        style: {
          width: `${length}px`,
          height: `${length}px`,
          left: `${event.clientX - rect.left - length / 2}px`,
          top: `${event.clientY - rect.top - length / 2}px`,
        },
      };
      setDrops((prev) => [...prev, newDrop]);
    },
    []
  );

  const onAnimationEnd = useCallback(
    (e: React.AnimationEvent<HTMLSpanElement>) => {
      const key = toInteger(e.currentTarget.dataset.key as string);
      setDrops((currentRipples) =>
        currentRipples.filter((ripple) => ripple.key !== key)
      );
    },
    []
  );

  return (
    <StyledRippleBox
      onClick={createDrop}
      color={color}
      width={width}
      height={height}
    >
      {drops.map((drop) => (
        <span
          className="ripple"
          key={drop.key}
          style={drop.style}
          data-key={drop.key}
          onAnimationEnd={onAnimationEnd}
        ></span>
      ))}
    </StyledRippleBox>
  );
}
