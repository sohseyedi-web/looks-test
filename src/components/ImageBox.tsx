import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ImageItem } from "../types/ImagesTypes";

const ImageBox = ({ image }: ImageItem) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="cursor-pointer relative">
      {/* Placeholder */}
      {!isLoaded && (
        <div className="w-full h-[220px] bg-zinc-800 rounded-2xl animate-pulse absolute top-0 left-0">
        </div>
      )}

      {/* Lazy Loaded Image */}
      <LazyLoadImage
        src={image?.urls?.full}
        alt={image.alt_description || "Image"}
        effect="opacity"
        onLoad={() => setIsLoaded(true)}
        className={`object-cover w-full h-[200px] md:h-[260px] sm:h-[220px] rounded-2xl transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ImageBox;
