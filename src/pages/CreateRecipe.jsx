import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const { recipe, setrecipe } = useContext(recipecontext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const imagePreview = watch("imgurl");

  const submitHandler = (data) => {
    data.id = nanoid();
    const copydata = [...recipe];
    copydata.push(data);
    setrecipe(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Created!");
    reset();
    navigate("/recipe");
  };

  const cancleBtn = () => {
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full rounded flex items-center justify-center relative"
    >
      <div className="mt-5 w-full md:w-[60%] lg:w-[40%] flex flex-col items-center justify-center">
        <div className="mt-5 w-[60%] md:w-[50%] flex flex-col items-center justify-center">
          <img
            src={imagePreview ? imagePreview : null}
            alt="food_img"
            className="w-[100%] rounded-3xl border-2 border-white/20 p-2 hover:scale-[100.8%] transition-all hover:shadow-xl"
          />
        </div>

        {/* image url */}
        <input
          type="url"
          placeholder="image URL"
          {...register("imgurl")}
          className="w-full bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 mt-5 border-l-amber-400 rounded-r-2xl p-2 font-thin text-[16px]"
        />

        {/* title */}
        <span className="text-red-500 text-[12px] m-3">
          {" "}
          {errors.title && errors.title.message}{" "}
        </span>
        <input
          type="text"
          placeholder="recipe"
          {...register("title", { required: "Title cannot be empty!" })}
          className="w-full bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-thin text-[16px]"
        />

        {/* description */}
        <span className="text-red-500 text-[12px] m-3">
          {" "}
          {errors.desc && errors.desc.message}{" "}
        </span>
        <textarea
          placeholder="description"
          {...register("desc", { required: "Description cannot be empty!" })}
          className="w-full min-h-[150px] bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-thin text-[16px]"
        ></textarea>

        {/* ingredients */}
        <span className="text-red-500 text-[12px] m-3">
          {" "}
          {errors.ingr && errors.ingr.message}{" "}
        </span>
        <textarea
          placeholder="ingredients"
          {...register("ingr", {
            required: "Ingredients cannot be empty!",
          })}
          className="w-full min-h-[150px] bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-thin text-[16px]"
        ></textarea>

        {/* category */}
        <select
          {...register("cat")}
          className="w-full mt-5 bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-thin text-[16px]"
        >
          <option className="bg-slate-900" value="breakfast">
            Breakfast
          </option>
          <option className="bg-slate-900" value="lunch">
            Lunch
          </option>
          <option className="bg-slate-900" value="dinner">
            Dinner
          </option>
          <option className="bg-slate-900" value="snaks">
            Snaks
          </option>
          <option className="bg-slate-900" value="smoothies">
            Smoothies
          </option>
          <option className="bg-slate-900" value="dessert">
            Dessert
          </option>
        </select>

        {/* chef */}
        <input
          type="text"
          placeholder="chef name"
          {...register("chef")}
          className="w-full mt-5 bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-thin text-[16px]"
        />

        {/* submit btn */}
        <div className="w-full flex gap-10 px-5">
          <button className="bg-gradient-to-br hover:bg-gradient-to-tl from-slate-900 via-slate-900 to-slate-800 cursor-pointer p-3 w-1/2 mb-24 mt-5 rounded-2xl font-semibold text-amber-400 active:border-0 active:text-[17px] hover:bg-[#0e0d13c0 border-b-2 border-amber-400">
            Create
          </button>
          <button
            onClick={cancleBtn}
            className="bg-gradient-to-br hover:bg-gradient-to-tl from-slate-900 via-slate-900 to-slate-800 cursor-pointer p-3 w-1/2 mb-24 mt-5 rounded-2xl font-semibold text-red-500 active:border-0 active:text-[17px] hover:bg-[#0e0d13c0 border-b-2 border-red-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateRecipe;
