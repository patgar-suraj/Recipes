import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../componente/RecipeCard";
import { CgSearchLoading } from "react-icons/cg";

const Recipe = () => {
  const { recipe } = useContext(recipecontext);

  const renderrecipes = recipe.map((data) => (
    <RecipeCard key={data.id} data={data} />
  ));

  return <div className="flex flex-col items-center justify-center gap-5 mb-24">
    {/* search option */}
    <div className="w-full md:w-1/2 bg-[#0E0D13] p-2 rounded border-l-2 border-amber-300 flex items-center justify-between">
      <input type="text" placeholder="find recipe here..." className="w-[90%]" />
      <button><CgSearchLoading className="w-[30px] h-[30px] text-amber-300 cursor-pointer hover:text-amber-400" /></button>
    </div>

    {/* recipe showcase */}
    <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
     {renderrecipes} 
    </div>
     </div>;
};

export default Recipe;
