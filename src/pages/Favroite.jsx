import RecipeCard from "../componente/RecipeCard";
import { CgSearchLoading } from "react-icons/cg";

const Favroite = () => {
  const favroite = JSON.parse(localStorage.getItem("fav") || "[]");

  const renderrecipes = favroite.map((data) => (
    <RecipeCard key={data.id} data={data} />
  ));

  const nofavfound = (
    <div className="w-screen flex flex-wrap p-10 items-center justify-center mt-10 -ml-6 md:-ml-12">
      <p className="lg:text-2xl text-lg text-amber-400 font-semibold text-center">
        You haven't added any favorite recipes!
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-24">
      {/* search option */}
      <div className="w-full md:w-1/2 bg-gradient-to-r hover:bg-gradient-to-l from-[#0E0D13] via-[#0E0D13] to-[#1b1924] p-2 rounded-full border-l-2 border-amber-300 flex items-center justify-between">
        <input
          type="text"
          placeholder="find your favorite recipe..."
          className="w-[90%] outline-none pl-2"
        />
        <button>
          <CgSearchLoading className="w-[30px] h-[30px] text-amber-300 cursor-pointer hover:text-amber-400" />
        </button>
      </div>

      {/* recipe showcase */}
      <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {favroite.length > 0 ? renderrecipes : nofavfound}
      </div>
    </div>
  );
};

export default Favroite;
