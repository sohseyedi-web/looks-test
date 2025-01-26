import { useState } from "react";
import fetchImages from "../service/imageService";
import { ImagesTypes } from "../types/ImagesTypes";

export const useGetImageData = () => {
  const [images,setImages] = useState<ImagesTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getImageData = async (value: string) => {
    setLoading(true);
    try {
      const data = await fetchImages(value);
      setImages(data?.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getImageData, images };
};
