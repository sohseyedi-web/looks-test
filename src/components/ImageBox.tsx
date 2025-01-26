import { ImageItem } from "../types/ImagesTypes";

const ImageBox = ({ image }: ImageItem) => {
  return (
    <div key={image.id} className="cursor-pointer">
      <img
        src={image?.urls?.full}
        alt={image.alt_description}
        className="object-contain w-full h-[220px] rounded-2xl"
      />
    </div>
  );
};

export default ImageBox;
