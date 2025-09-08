import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Recipe from "../pages/Recipe"
import CreateRecipe from "../pages/CreateRecipe"

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/createRecipe" element={<CreateRecipe />} />
    </Routes>
  )
}

export default Mainroutes