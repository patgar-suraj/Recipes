import { CgSearchLoading } from "react-icons/cg";

const SearchCard = ({query, setQuery}) => {

  return (
    <div className="w-full md:w-1/2 transition-all bg-gradient-to-r hover:bg-gradient-to-l from-[#0E0D13] via-[#0E0D13] to-[#1b1924] p-2 rounded-full border-l-2 border-amber-300 flex items-center justify-between">
      <input
        type="text"
        placeholder="find your recipe..."
        className="w-[90%] outline-none pl-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <CgSearchLoading className="w-[30px] h-[30px] text-amber-300 cursor-pointer hover:text-amber-400" />
      </button>
    </div>
  );
};

export default SearchCard;
