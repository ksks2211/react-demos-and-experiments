import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const StyledFixedBackground = styled(Box)<{ src: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const StyledFixedContent = styled(Box)`
  width: 100%;
  min-height: 33vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: lightcoral;
  font-size: 3rem;

  box-sizing: border-box;

  /* background-color: green; */

  padding: 0 12rem;

  & div {
    display: flex;

    width: 15rem;
    min-height: 9rem;

    border-radius: 50%;

    /* background-color: orange; */
    overflow: hidden;

    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }
`;

export default function FixedBackground({
  src,
}: {
  src: string;
  children?: ReactNode;
}) {
  return (
    <StyledFixedBackground src={src}>
      <StyledFixedContent>
        <div>Row1</div>
      </StyledFixedContent>
      <StyledFixedContent>
        <div>Row2</div>
      </StyledFixedContent>
      <StyledFixedContent>
        <div>Row3</div>
      </StyledFixedContent>
      <StyledFixedContent>
        <div>Row4</div>
      </StyledFixedContent>

      <StyledFixedContent>
        <div>Row5</div>
      </StyledFixedContent>
    </StyledFixedBackground>
  );
}
