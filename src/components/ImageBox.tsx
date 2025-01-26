import LazyLoad from "react-lazyload";
import { ImageItem } from "../types/ImagesTypes";

const ImageBox = ({ image }: ImageItem) => {
  return (
    <div className="cursor-pointer">
      <LazyLoad
        height={220}
        offset={200}
        placeholder={
          <div className="w-full h-[220px] bg-gray-700 rounded-2xl animate-pulse" />
        }
      >
        <img
          src={image?.urls?.full}
          alt={image.alt_description || "Image"}
          className="object-cover w-full h-[200px] md:h-[260px] sm:h-[220px] rounded-2xl"
        />
      </LazyLoad>
    </div>
  );
};

export default ImageBox;
