import { createContext, useState, useEffect } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [recipe, setrecipe] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipe));
  }, [recipe]);

  const [query, setQuery] = useState("")

  const searchRecipe = recipe.filter(
    (r) => 
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.cat.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <recipecontext.Provider value={{ recipe, setrecipe, query, setQuery, searchRecipe }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
