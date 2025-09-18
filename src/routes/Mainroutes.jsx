import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Recipe from "../pages/Recipe"
import CreateRecipe from "../pages/CreateRecipe"
import SingleRecipe from "../pages/SingleRecipe"
import PageNotFound from "../pages/PageNotFound"
import Favroite from "../pages/Favroite"

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/createRecipe" element={<CreateRecipe />} />
        <Route path="/recipe/detail/:id" element={<SingleRecipe />} />
        <Route path="/favroite" element={<Favroite />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Mainroutes