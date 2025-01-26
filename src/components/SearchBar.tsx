import { useState } from "react";
import { useSearchStore } from "../store/useStore";
import TextField from "./TextField";
import SearchHistory from "./SearchHistory";
import fetchImages from "../service/imageService";

const SearchBar = () => {
  const {
    saveSearch,
    search,
    addToImageData,
    searchHistory,
    setLoading,
    setError,
  } = useSearchStore();
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const getImageData = async (value: string) => {
    setLoading(true);
    try {
      const data = await fetchImages(value);
      addToImageData(data?.results);
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveSearch();
    setShowHistory(false);
    getImageData(search);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative">
      <TextField
        onFocus={() => setShowHistory(true)}
        onBlur={() => setTimeout(() => setShowHistory(false), 200)}
      />
      <button
        type="submit"
        className="absolute hover:bg-black transition-all duration-300 text-lg right-0 rounded-2xl px-8 border-[#3d3d3d] border-2 top-0 h-full bg-[#313131] text-zinc-400"
      >
        Search
      </button>
      {searchHistory.length > 0 && (
        <SearchHistory show={showHistory} setShow={setShowHistory} />
      )}
    </form>
  );
};

export default SearchBar;
