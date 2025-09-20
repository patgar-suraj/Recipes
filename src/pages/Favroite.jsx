import { useContext, useState } from "react";
import RecipeCard from "../componente/RecipeCard";
import SearchCard from "../componente/SearchCard";
import { recipecontext } from "../context/RecipeContext";

const Favroite = () => {
  const favroite = JSON.parse(localStorage.getItem("fav") || "[]");
  
  const [query, setQuery] = useState("")

  const filteredFavorites = favroite.filter(
    (r) =>
      r.title?.toLowerCase().includes(query.toLowerCase()) ||
      r.cat?.toLowerCase().includes(query.toLowerCase())
  );

  const renderrecipes = filteredFavorites.map((data) => (
    <RecipeCard key={data.id} data={data} />
  ));

  const nofavfound = (
    <div className="w-screen flex flex-wrap p-10 items-center justify-center mt-10 -ml-6 md:-ml-12">
      <p className="lg:text-2xl text-lg text-amber-400 font-semibold text-center">
        You haven't added any favorite recipes yet!
      </p>
    </div>
  );

  const nosearchfound = (
    <div className="w-screen flex flex-wrap p-10 items-center justify-center mt-10 -ml-6 md:-ml-12">
      <p className="lg:text-2xl text-lg text-amber-400 font-semibold text-center">
        No recipes match your search!
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-24">
      {/* search option */}
      <SearchCard query={query} setQuery={setQuery} />

      {/* recipe showcase */}
      <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {favroite.length === 0
          ? nofavfound
          : filteredFavorites.length > 0
          ? renderrecipes
          : nosearchfound}
      </div>
    </div>
  );
};

export default Favroite;
