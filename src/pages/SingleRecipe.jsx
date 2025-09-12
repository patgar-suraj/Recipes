import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { recipe, setrecipe } = useContext(recipecontext);
  const navigate = useNavigate();

  const params = useParams();
  const data = recipe.find((data) => params.id == data.id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imgurl: data.imgurl,
      title: data.title,
      desc: data.desc,
      ingr: data.ingr,
      cat: data.cat,
      chef: data.chef,
    },
  });

  const submitHandler = (data) => {
    const index = recipe.findIndex((data) => params.id == data.id);
    const copydata = [...recipe];
    copydata[index] = { ...copydata[index], ...data };
    setrecipe(copydata);
    toast.success("Recipe Updated!");
  };

  const deleteHandler = () => {
    const filterdata = recipe.filter((r) => r.id != params.id);
    setrecipe(filterdata);
    toast.success("Recipe Deleted!")

    navigate("/recipe");
  };

  return data ? (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full rounded flex flex-col items-center justify-center relative"
    >
      <div className="mt-5 w-[60%] md:w-[30%] lg:w-[20%] flex flex-col items-center justify-center">
        {data.imgurl ? (
          <img
            src={data.imgurl}
            alt="food_img"
            className="w-[100%] rounded-3xl border-2 border-white/20 p-2 hover:scale-[100.8%] transition-all hover:shadow-xl"
          />
        ) : (
          <MdImageNotSupported className="w-full h-full rounded-3xl border-2 border-white/20 border-b-2 border-b-amber-400" />
        )}
      </div>

      <div className="mt-5 w-full md:w-[60%] lg:w-[40%] flex flex-col items-center justify-center">
        {/* title */}
        <span className="text-red-500 text-[12px] m-3">
          {" "}
          {errors.title && errors.title.message}{" "}
        </span>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: "Title cannot be empty!" })}
          className="w-full bg-[#0E0D13] hover:bg-[#13111c] border-[#0E0D13]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
        />

        {/* description */}
        <span className="text-red-500 text-[12px] m-3">
          {" "}
          {errors.desc && errors.desc.message}{" "}
        </span>
        <textarea
          placeholder="description"
          {...register("desc", { required: "Description cannot be empty!" })}
          className="w-full min-h-[150px] bg-[#0E0D13] hover:bg-[#13111c] border-[#0E0D13]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
        ></textarea>

        {/* ingredients */}
        <span className="text-red-500 text-[12px] m-3">
          {" "}
          {errors.ingr && errors.ingr.message}{" "}
        </span>
        <textarea
          placeholder="write ingredients seperated by comma"
          {...register("ingr", {
            required: "Ingredients cannot be empty!",
          })}
          className="w-full min-h-[150px] bg-[#0E0D13] hover:bg-[#13111c] border-[#0E0D13]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
        ></textarea>

        {/* image url */}
        <input
          type="url"
          placeholder="image URL"
          {...register("imgurl")}
          className="w-full bg-[#0E0D13] hover:bg-[#13111c] mt-5 border-[#0E0D13]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
        />

        {/* category */}
        <select
          {...register("cat")}
          className="w-full mt-5 bg-[#0E0D13] hover:bg-[#13111c] border-[#0E0D13]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
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
          className="w-full mt-5 bg-[#0E0D13] hover:bg-[#13111c] border-[#0E0D13]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
        />

        {/* submit btn */}
        <div className="w-full flex gap-10 px-5">
          <button className="bg-[#0E0D13] hover:bg-[#13111c] p-3 w-1/2 mb-24 mt-5 rounded-2xl font-semibold text-amber-400 active:border-0 active:text-[17px] hover:bg-[#0e0d13c0 border-b-2 border-amber-400">
            Update
          </button>
          <button
            onClick={deleteHandler}
            className="bg-[#0E0D13] hover:bg-[#13111c] p-3 w-1/2 mb-24 mt-5 rounded-2xl font-semibold text-red-500 active:border-0 active:text-[17px] hover:bg-[#0e0d13c0 border-b-2 border-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
