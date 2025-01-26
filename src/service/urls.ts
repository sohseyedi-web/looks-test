export const SEARCH_IMAGE = (query: string) =>
  `/search/photos?page=1&query=${query}&client_id=${
    import.meta.env.VITE_API_KEY
  }`;
