import { Box, styled } from "@mui/material";

interface BgImageProps {
  src: string;
  width: string;
  height: string;
  size?: "cover" | "contain";
}

const StyledBgImage = styled(Box)<BgImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  box-shadow: 0px 0px 12px grey;

  background-position: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: ${(props) => (props.size === "cover" ? "cover" : "contain")};
`;

export default function BgImage({
  src,
  width,
  height,
  size = "cover",
}: BgImageProps) {
  return <StyledBgImage src={src} width={width} height={height} size={size} />;
}
