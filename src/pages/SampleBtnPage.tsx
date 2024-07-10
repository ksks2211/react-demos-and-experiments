import { Box, styled } from "@mui/material";
import FullScreenBtn from "../components/buttons/FullScreenBtn";

const StyledSampleBtnPage = styled(Box)`
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledRow = styled(Box)`
  flex: 0 0 5rem;
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3rem;
`;

export default function SampleBtnPage() {
  return (
    <StyledSampleBtnPage>
      <StyledRow>
        <FullScreenBtn />
      </StyledRow>
      <StyledRow>btn1</StyledRow>
      <StyledRow>btn1</StyledRow>
    </StyledSampleBtnPage>
  );
}
