import { useContext, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../componente/RecipeCard";
import SearchCard from "../componente/SearchCard";

const Recipe = () => {
  const { recipe } = useContext(recipecontext);
  const [query, setQuery] = useState("");

  const filteredRecipes = recipe.filter(
    (r) =>
      r.title?.toLowerCase().includes(query.toLowerCase()) ||
      r.cat?.toLowerCase().includes(query.toLowerCase())
  );

  const renderrecipes = filteredRecipes.map((data) => (
    <RecipeCard key={data.id} data={data} />
  ));

  const norecipefound = (
    <div className="w-full flex items-center justify-center mt-10">
      <p className="lg:text-2xl text-lg accent font-semibold text-center">
        No recipes found!
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-24">
      {/* search option */}
      <SearchCard query={query} setQuery={setQuery} />

      {/* recipe showcase */}
      <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {filteredRecipes.length > 0 ? renderrecipes : norecipefound}
      </div>
    </div>
  );
};

export default Recipe;
