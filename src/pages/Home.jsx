import { IoMdNotificationsOutline } from "react-icons/io";
import { CgSearchLoading } from "react-icons/cg";
import CategoryCard from "../componente/CategoryCard";
import TrendingRecipeCard from "../componente/TrendingRecipeCard";
import { BiArrowToLeft } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";
import { useRef } from "react";
import Contect from "./Contact";
import SearchCard from "../componente/SearchCard";

const Home = () => {
  const scrollRef = useRef(null);

  const scrollleft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollright = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full mb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-5">
          <img
            className="w-[80px] h-[80px] rounded-full hover:border-2 border-amber-400 object-cover"
            src="https://imgs.search.brave.com/LZVvz2m6dEdxABLGXG0gsI8DRnezcqYeh1zPBYF3tc4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA"
          />
          <h1 className="md:text-2xl text-xl font-semibold cursor-default">Suraj</h1>
        </div>
        <div className="bg-[#0F0E15] hover:text-amber-400 rounded-full p-3">
          <IoMdNotificationsOutline className="text-2xl" />
        </div>
      </div>

      <h1 className="text-3xl font-mono my-5">What's cooking today?</h1>

      <SearchCard />

      <div className="w-full xl:w-1/2 overflow-hidden mt-5">
        <CategoryCard />
      </div>

      <h1 className="mt-10 text-2xl font-semibold font-mono">
        Trending Recipes...
      </h1>

      <div className="mt-10 w-full flex items-center justify-center overflow-hidden">
        <div className="w-20px p-1">
          <BiArrowToLeft
            onClick={scrollleft}
            className="text-4xl hidden xl:block hover:text-gray-300"
          />
        </div>
        <TrendingRecipeCard scrollRef={scrollRef} />
        <div className="w-20px p-1">
          <BiArrowToRight
            onClick={scrollright}
            className="text-4xl hidden xl:block hover:text-gray-300"
          />
        </div>
      </div>

      <div>
        <Contect />
      </div>
    </div>
  );
};

export default Home;
