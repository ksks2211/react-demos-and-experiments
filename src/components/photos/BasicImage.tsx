import { styled } from "@mui/material";
import { useState } from "react";

interface BasicImageProps {
  src: string;
  fit?: "width" | "height" | "full" | "original";
}

const StyledImage = styled("img")<BasicImageProps>`
  height: ${(props) => (props.fit !== "width" ? "100%" : "auto")};
  width: ${(props) => (props.fit !== "height" ? "100%" : "auto")};
`;

export default function BasicImage({ src, fit = "height" }: BasicImageProps) {
  const [isWide, setIsWide] = useState<boolean>(false);

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setIsWide(naturalWidth > naturalHeight);
  };

  const title = isWide ? "Wide Image" : "Tall Image";

  if (fit === "original") {
    return (
      <img src={src} onLoad={handleImageLoad} alt="image-alt" title={title} />
    );
  }

  return (
    <StyledImage
      src={src}
      onLoad={handleImageLoad}
      fit={fit}
      alt="image-alt"
      title={title}
    />
  );
}
