import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const CreateRecipe = () => {
  const { recipe, setrecipe } = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();

    setrecipe([...recipe, data]);

    console.log(data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full rounded flex items-center justify-center relative"
    >
      <div className="mt-5 w-full md:w-[60%] lg:w-[40%] flex flex-col items-center justify-center">
        {/* image url */}
        <input
          type="url"
          placeholder="image URL"
          {...register("imageurl")}
          className="w-full bg-[#1F1E2E] border-4 rounded-2xl border-[#0E0D13]/50 p-2 font-semibold  text-[16px]"
        />

        {/* title */}
        <span className="text-red-500 m-3">
          {" "}
          {errors.title && errors.title.message}{" "}
        </span>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: "Title cannot be empty!" })}
          className="w-full bg-[#1F1E2E] border-4 rounded-2xl border-[#0E0D13]/50 p-2 font-semibold  text-[16px]"
        />

        {/* description */}
        <span className="text-red-500 m-3">
          {" "}
          {errors.desc && errors.desc.message}{" "}
        </span>
        <textarea
          placeholder="description"
          {...register("desc", { required: "Description cannot be empty!" })}
          className="w-full min-h-[150px] bg-[#1F1E2E] border-4 rounded-2xl border-[#0E0D13]/50 p-2 font-semibold  text-[16px]"
        ></textarea>

        {/* ingredients */}
        <span className="text-red-500 m-3">
          {" "}
          {errors.ingredients && errors.ingredients.message}{" "}
        </span>
        <textarea
          placeholder="write ingredients seperated by comma"
          {...register("ingredients", {
            required: "Ingredients cannot be empty!",
          })}
          className="w-full min-h-[150px] bg-[#1F1E2E] border-4 rounded-2xl border-[#0E0D13]/50 p-2 font-semibold  text-[16px]"
        ></textarea>

        {/* category */}
        <select
          {...register("category")}
          className="w-full mt-5 bg-[#1F1E2E] border-4 rounded-2xl border-[#0E0D13]/50 p-2 font-semibold  text-[16px]"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snaks">Snaks</option>
        </select>

        {/* chef */}
        <input
          type="text"
          placeholder="chef name"
          {...register("chef")}
          className="w-full mt-5 bg-[#1F1E2E] border-4 rounded-2xl border-[#0E0D13]/50 p-2 font-semibold  text-[16px]"
        />

        {/* submit btn */}
        <button className="bg-[#0E0D13] p-3 w-1/2 mb-24 mt-5 rounded-2xl font-semibold text-amber-400 active:border-0 active:text-[17px] hover:bg-[#0e0d13c0 border-b-2 border-amber-400">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateRecipe;
