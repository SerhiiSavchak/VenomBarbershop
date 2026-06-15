"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { BLUR_DATA_URL } from "@/lib/image-placeholder";

type OptimizedImageProps = ImageProps & {
  fadeIn?: boolean;
};

export function OptimizedImage({
  alt = "",
  fadeIn = true,
  className = "",
  onLoad,
  priority,
  placeholder,
  blurDataURL,
  loading,
  fill,
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(Boolean(priority));

  const image = (
    <Image
      {...props}
      fill={fill}
      alt={alt}
      priority={priority}
      loading={priority ? undefined : loading ?? "lazy"}
      placeholder={placeholder ?? "blur"}
      blurDataURL={blurDataURL ?? BLUR_DATA_URL}
      className={className}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
    />
  );

  if (!fadeIn) {
    return image;
  }

  const visible = loaded || priority;
  const fadeWrapperClass = `transition-opacity duration-500 ease-out${visible ? " opacity-100" : " opacity-0"}`;

  if (fill) {
    return <div className={`absolute inset-0 ${fadeWrapperClass}`}>{image}</div>;
  }

  return <div className={fadeWrapperClass}>{image}</div>;
}
