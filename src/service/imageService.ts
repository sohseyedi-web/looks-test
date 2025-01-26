import api from "./api";

export default async function fetchImages(query: string) {
  try {
    const { data } = await api.get(
      `/search/photos?page=1&query=${query}&client_id=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
