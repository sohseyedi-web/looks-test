import { useSearchStore } from "../store/useStore";

type SearchHistoryTypes = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchHistory = ({ show, setShow }: SearchHistoryTypes) => {
  const { searchHistory, setSearchTerm } = useSearchStore();

  const handleHistoryClick = (selectedQuery: string) => {
    setSearchTerm(selectedQuery);
    setShow(false);
  };

  return (
    <div
      className={`border-2 z-30 absolute overflow-y-auto w-full border-[#3d3d3d] bg-[#101010] mt-3 px-4 py-1 text-zinc-400 rounded-2xl transition-all duration-300 ease-in-out ${
        show ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
      } overflow-hidden scrollbar`}
    >
      {searchHistory?.map((item) => (
        <span
          className="text-2xl block my-2 cursor-pointer hover:bg-[#313131] rounded-lg p-2"
          key={item}
          onClick={() => handleHistoryClick(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default SearchHistory;
