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

  return (
    <recipecontext.Provider value={{ recipe, setrecipe }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
