import { CgSearchLoading } from "react-icons/cg";

const SearchCard = ({query, setQuery}) => {

  return (
    <div className="w-full md:w-1/2 bg-gradient-to-r hover:bg-gradient-to-l from-slate-900 via-slate-800 to-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition p-2 rounded-full border-2  border-slate-700 flex items-center justify-between">
      <input
        type="text"
        placeholder="find your recipes by name & category..."
        className="w-[90%] outline-none pl-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <CgSearchLoading className="w-[30px] h-[30px] text-amber-500 cursor-pointer hover:text-amber-400" />
      </button>
    </div>
  );
};

export default SearchCard;
