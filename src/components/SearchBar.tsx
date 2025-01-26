import { useState } from "react";
import { useSearchStore } from "../store/useStore";
import TextField from "./TextField";
import SearchHistory from "./SearchHistory";
import fetchImages from "../service/imageService";

const SearchBar = () => {
  const { saveSearch, search, addToImageData, searchHistory } =
    useSearchStore();
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const getImageData = async (value: string) => {
    const data = await fetchImages(value);
    addToImageData(data?.results);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveSearch();
    setShowHistory(false);
    getImageData(search);
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit} className="relative">
        <TextField
          onFocus={() => setShowHistory(true)}
          onBlur={() => setTimeout(() => setShowHistory(false), 200)}
        />
        <button
          type="submit"
          className="absolute right-2 rounded-2xl px-4 top-1.5 h-[80%] bg-[#313131] text-zinc-400"
        >
          Search
        </button>
      </form>
      {searchHistory.length > 0 && (
        <SearchHistory show={showHistory} setShow={setShowHistory} />
      )}
    </>
  );
};

export default SearchBar;
