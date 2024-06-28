import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)`
  color: var(--text-color);
`;

interface ThemeExProps {
  toggleTheme: () => void;
}

export default function ThemeEx(props: ThemeExProps) {
  return <StyledBox onClick={props.toggleTheme}>Hello World</StyledBox>;
}
