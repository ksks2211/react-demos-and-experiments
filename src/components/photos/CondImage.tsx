import { useEffect, useRef, useState } from "react";

export default function CondImage({ src }: { src: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isWide, setIsWide] = useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleImageLoad = () => {
      if (imgRef.current) {
        const { naturalWidth, naturalHeight } = imgRef.current;
        setIsWide(naturalWidth > naturalHeight);
        setIsLoading(false);
      }
    };

    const handleImageError = () => {
      setIsError(true);
      setIsLoading(false);
    };

    if (!imgRef.current) {
      handleImageError();
      return;
    }

    if (imgRef.current.complete) {
      if (imgRef.current.naturalWidth === 0) {
        handleImageError();
      } else {
        handleImageLoad();
      }
    } else {
      imgRef.current.onload = handleImageLoad;
      imgRef.current.onerror = handleImageError;
    }
  }, [src]);

  return (
    <>
      <img
        ref={imgRef}
        src={src}
        alt="hidden"
        style={{ display: "none" }}
        hidden
      />
      {isLoading ? (
        <p>Loading....</p>
      ) : isError ? (
        <p>Error....</p>
      ) : isWide ? (
        <img ref={imgRef} src={src} title="Wide Image" />
      ) : (
        <img ref={imgRef} src={src} title="Tall Image" />
      )}
    </>
  );
}
