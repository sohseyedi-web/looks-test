import { useEffect, useState } from "react";
import TextField from "./components/TextField";
import api from "./service/api";
import { SEARCH_IMAGE } from "./service/urls";
import { ImagesTypes } from "./types/ImagesTypes";
import ImageBox from "./components/ImageBox";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const [imageData, setImageData] = useState<ImagesTypes[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false); // State برای نمایش تاریخچه

  useEffect(() => {
    try {
      const savedHistory = JSON.parse(
        localStorage.getItem("searchHistory") || "[]"
      ) as string[];
      setSearchHistory(savedHistory);
    } catch (error) {
      console.error("Failed to parse search history", error);
    }
  }, []);

  const saveSearch = (query: string) => {
    if (query.trim() === "") return;

    if (!searchHistory.includes(query)) {
      const updatedHistory = [query, ...searchHistory];
      setSearchHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }
  };

  const getImagesData = async () => {
    const { data } = await api.get(SEARCH_IMAGE(search));
    setImageData(data?.results);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveSearch(search);
    setShowHistory(false); // بعد از جستجو تاریخچه را مخفی کن
    getImagesData();
  };

  const handleHistoryClick = (selectedQuery: string) => {
    setSearch(selectedQuery);
    setShowHistory(false); // بعد از کلیک روی آیتم تاریخچه را مخفی کن
  };

  return (
    <main className="max-w-4xl p-4 mx-auto">
      <form onSubmit={handleSearchSubmit} className="relative">
        <TextField
          value={search}
          onChange={(value) => setSearch(value)}
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

      <div
        className={`border-2 border-[#3d3d3d] bg-[#101010] mt-3 px-4 py-1 text-zinc-400 rounded-2xl transition-all duration-300 ease-in-out ${
          showHistory ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        {searchHistory?.map((item, index) => (
          <span
            className="text-2xl block my-2 cursor-pointer hover:bg-[#313131] rounded-lg p-2"
            key={index}
            onClick={() => handleHistoryClick(item)}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-y-3 gap-x-7 flex-wrap">
        {imageData?.map((image) => (
          <ImageBox image={image} />
        ))}
      </div>
    </main>
  );
}

export default App;
