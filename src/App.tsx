import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { useSearchStore } from "./store/useStore";
import Loading from "./components/Loading";
import ImageBox from "./components/ImageBox";

function App() {
  const { addToSearchHistory,images,loading,error } = useSearchStore();

  useEffect(() => {
    try {
      const savedHistory = JSON.parse(
        localStorage.getItem("searchHistory") || "[]"
      ) as string[];
      addToSearchHistory(savedHistory);
    } catch (error) {
      console.error("Failed to parse search history", error);
    }
  }, []);

  return (
    <main className="max-w-4xl p-4 mx-auto">
      <SearchBar />
      {error && <p className="text-red-500 text-center mt-5 text-2xl">{error}</p>}
      {loading ? (
        <Loading />
      ) : (
        <div className="py-3 flex items-center gap-y-3 gap-x-7 flex-wrap">
          {images?.map((image) => (
            <ImageBox key={image.id} image={image} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
