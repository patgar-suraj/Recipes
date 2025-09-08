import { TbHomeDot, TbHomeEco, TbHomeEdit, TbHomeQuestion } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full z-50 fixed bottom-0 left-0 p-3 border-t-2  rounded-t-4xl bg-[#0E0D13] text-[#797993] flex items-center justify-center text-xl font-semibold gap-10">
      <NavLink 
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center gap-2 ${isActive ? "text-amber-300" : ""}`
        }
      >
        <TbHomeDot className="text-4xl" />
        {location.pathname === "/" && <span className="text-sm">Home</span>}
      </NavLink>

      <NavLink 
        to="/about"
        className={({ isActive }) =>
          `flex flex-col items-center gap-2 ${isActive ? "text-amber-300" : ""}`
        }
      >
        <TbHomeQuestion className="text-4xl" />
        {location.pathname === "/about" && <span className="text-sm">About</span>}
      </NavLink>

      <NavLink 
        to="/recipe"
        className={({ isActive }) =>
          `flex flex-col items-center gap-2 ${isActive ? "text-amber-300" : ""}`
        }
      >
        <TbHomeEco className="text-4xl" />
        {location.pathname === "/recipe" && <span className="text-sm">Recipe</span>}
      </NavLink>

      <NavLink 
        to="/createRecipe"
        className={({ isActive }) =>
          `flex flex-col items-center gap-2 ${isActive ? "text-amber-300" : ""}`
        }
      >
        <TbHomeEdit className="text-4xl" />
        {location.pathname === "/createRecipe" && <span className="text-sm">Create</span>}
      </NavLink>
    </nav>
  );
};

export default Navbar;
