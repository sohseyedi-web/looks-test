import { ImagesTypes } from "./ImagesTypes";

export type SearchState = {
  search: string;
  error: string;
  searchHistory: string[];
  loading: boolean;
  images: ImagesTypes[];
};

export type SearchActions = {
  setSearchTerm: (term: string) => void;
  setError: (term: string) => void;
  addToSearchHistory: (term: string[]) => void;
  setLoading: (loading: boolean) => void;
  saveSearch: () => void;
  addToImageData: (term: ImagesTypes[]) => void;
};

export type SearchStore = SearchState & SearchActions;
