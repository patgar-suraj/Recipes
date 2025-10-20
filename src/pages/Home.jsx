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
    <div className="flex flex-col w-full mb-20 md:mb-0 xl:mb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-5">
          <img
            className="w-[80px] h-[80px] rounded-full hover:border-2 border-slate-950 object-cover"
            src="https://i.pinimg.com/1200x/60/f3/8f/60f38ff9f4113d96ac13a43a4919e848.jpg"
          />
          <h1 className="md:text-2xl text-xl font-semibold cursor-default">User</h1>
        </div>
        <div className="bg-slate-900 hover:text-amber-400 rounded-full p-3">
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
            className="text-4xl hidden xl:block hover:text-amber-400"
          />
        </div>
        <TrendingRecipeCard scrollRef={scrollRef} />
        <div className="w-20px p-1">
          <BiArrowToRight
            onClick={scrollright}
            className="text-4xl hidden xl:block hover:text-amber-400"
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
