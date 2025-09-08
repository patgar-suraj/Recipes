import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipe = () => {
  const { recipe } = useContext(recipecontext);

  const renderrecipes = recipe.map((data) => (
    <div key={data.id}>
      <h1> {data.title} </h1>
    </div>
  ));

  return <div> {renderrecipes} </div>;
};

export default Recipe;
