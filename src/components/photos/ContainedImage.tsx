import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ContainedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  width: string;
  height: string;
  src: string;
}

const StyledContainedImage = styled("img")<ContainedImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
`;

const StyledImageWrapper = styled(Box)`
  position: relative;
  cursor: grab;

  box-shadow: 0 0 2px #010101;
`;

const StyledLoadingBox = styled(Box)`
  position: absolute;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const StyledErrorBox = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightcoral;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export default function ContainedImage({
  width,
  height,
  src,
  ...rest
}: ContainedImageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const handleImageLoad = () => {
    setIsSuccess(true);
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsError(true);
    setIsLoading(false);
    setIsSuccess(false);
  };

  // const handleImageReload = () => {
  //   setIsError(false);
  //   setIsLoading(false);
  //   setIsSuccess(false);
  // };

  useEffect(() => {
    const handleImageLoadStart = () => {
      if (isSuccess) return;
      setIsLoading(true);
    };

    if (inView) {
      handleImageLoadStart();
    }
  }, [inView, isSuccess]);

  return (
    <StyledImageWrapper width={width} height={height} ref={ref}>
      {(isLoading || isSuccess) && (
        <StyledContainedImage
          src={src}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          {...rest}
        />
      )}

      {isLoading && <StyledLoadingBox>Loading...</StyledLoadingBox>}
      {isError && <StyledErrorBox>Error...</StyledErrorBox>}
    </StyledImageWrapper>
  );
}
