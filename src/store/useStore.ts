import { create } from "zustand";
import { ImagesTypes } from "../types/ImagesTypes";
import { SearchStore } from "../types/StoreTypes";

export const useSearchStore = create<SearchStore>((set, get) => ({
  search: "",
  searchHistory: [],
  loading: false,
  images: [],

  // actions
  setSearchTerm: (term) => set({ search: term }),
  addToSearchHistory: (term: string[]) =>
    set((state) => {
      const uniqueTerms = term.filter(
        (item) => !state.searchHistory.includes(item)
      );
      return {
        searchHistory: [...state.searchHistory, ...uniqueTerms],
      };
    }),
  setLoading: (loading) => set({ loading }),

  saveSearch: () => {
    const { searchHistory, search } = get();

    if (search.trim() === "") return;
    if (!searchHistory.includes(search)) {
      const updatedHistory = [search, ...searchHistory];
      set({ searchHistory: updatedHistory });
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }
  },

  addToImageData: (term: ImagesTypes[]) => {
    set((state) => ({
      images: [...state.images, ...term],
    }));
  },
}));
