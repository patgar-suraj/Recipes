import { Link } from "react-router-dom";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { RiDrinks2Line } from "react-icons/ri";
import { LuDessert } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";

const CategoryCard = () => {
  return (
    <Link className="w-full grid grid-flow-row grid-cols-4 md:grid-cols-6 xl:grid-cols-7  gap-3">
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800 hover:text-amber-400 hover:bg-gradient-to-bl p-4 gap-2 rounded-2xl border-2 border-slate-600 active:border-amber-400 mt-5">
        <MdOutlineFreeBreakfast className="text-2xl" />
        <span className="text-[14px] font-semibold">Breakfast</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800 hover:text-amber-400 hover:bg-gradient-to-bl p-4 gap-2 rounded-2xl border-2 border-slate-600 active:border-amber-400 mt-5">
        <MdOutlineLunchDining className="text-2xl" />
        <span className="text-[14px] font-semibold">Lunch</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800 hover:text-amber-400 hover:bg-gradient-to-bl p-4 gap-2 rounded-2xl border-2 border-slate-600 active:border-amber-400 mt-5">
        <MdOutlineDinnerDining className="text-2xl" />
        <span className="text-[14px] font-semibold">Dinner</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800 hover:text-amber-400 hover:bg-gradient-to-bl p-4 gap-2 rounded-2xl border-2 border-slate-600 active:border-amber-400 mt-5">
        <IoFastFoodOutline className="text-2xl" />
        <span className="text-[14px] font-semibold">Snack</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800 hover:text-amber-400 hover:bg-gradient-to-bl p-4 gap-2 rounded-2xl border-2 border-slate-600 active:border-amber-400 mt-5">
        <RiDrinks2Line className="text-2xl" />
        <span className="text-[14px] font-semibold">Smoothies</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800 hover:text-amber-400 hover:bg-gradient-to-bl p-4 gap-2 rounded-2xl border-2 border-slate-600 active:border-amber-400 mt-5">
        <LuDessert className="text-2xl" />
        <span className="text-[14px] font-semibold">Dessert</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
