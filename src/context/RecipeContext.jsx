import { createContext, useState } from "react"

export const recipecontext = createContext(null)

const RecipeContext = (props) => {

    const [recipe, setrecipe] = useState([])
    console.log(recipe);
    

  return (
    <recipecontext.Provider value={{recipe, setrecipe}}>
        {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext