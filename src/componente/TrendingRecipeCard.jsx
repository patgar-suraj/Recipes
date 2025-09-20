import { RecipeList } from "../context/RecipeList";
import { FaStar } from "react-icons/fa";

const TrendingRecipeCard = ({ scrollRef }) => {
  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto custom-scrollbar gap-5"
    >
      {/* Card 1 */}
      {RecipeList.map((recipe, idx) => (
        <div
          key={idx}
          className="group relative shrink-0 rounded-3xl bg-black overflow-hidden"
        >
          <h1 className="absolute z-20 bottom-12 left-3 break-all w-[125px] lg:w-[175px] text-xl lg:text-[22px] font-semibold text-white">
            {recipe.name}
          </h1>
          <span className="absolute z-20 bottom-12 right-6 text-2xl font-semibold text-white">
            {recipe.rating}
          </span>
          <span className="absolute z-20 bottom-16 right-2 text-2xl font-semibold text-white">
            <FaStar className="text-amber-400 text-[14px]" />
          </span>
          <p className="absolute bottom-6 left-3 font-semibold text-white">
            {recipe.cat}
          </p>
          <img
            className="w-[200px] xl:w-[250px] h-[250px] xl:h-[300px] object-cover group-hover:opacity-30 group-hover:scale-[1.05] transition-all"
            src={recipe.img}
            alt={recipe.name}
          />
        </div>
      ))}
    </div>
  );
};

export default TrendingRecipeCard;
