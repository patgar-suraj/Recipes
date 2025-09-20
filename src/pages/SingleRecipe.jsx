import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MdImageNotSupported } from "react-icons/md";
import { IoCaretBackOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const SingleRecipe = () => {
  const { recipe, setrecipe } = useContext(recipecontext);
  const navigate = useNavigate();

  const params = useParams();
  const data = recipe.find((data) => params.id == data.id);

  const [imgLoadError, setimgLoadError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      imgurl: data?.imgurl,
      title: data?.title,
      desc: data?.desc,
      ingr: data?.ingr,
      cat: data?.cat,
      chef: data?.chef,
    },
  });

  const imgpreview = watch("imgurl");

  const [favroite, setfavroite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const updataHandler = (data) => {
    const index = recipe.findIndex((r) => params.id == r.id);
    if (index !== -1) {
      const copydata = [...recipe];
      copydata[index] = { ...copydata[index], ...data };
      setrecipe(copydata);
      localStorage.setItem("recipes", JSON.stringify(copydata));
      toast.success("Recipe Updated!");
    }
  };

  const deleteHandler = () => {
    const filterdata = recipe.filter((r) => r.id != params.id);
    setrecipe(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    const fav = JSON.parse(localStorage.getItem("fav") || "[]");
    const filterfav = fav.filter((f) => f.id != params.id);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    setfavroite(filterfav);

    toast.success("Recipe Deleted!");
    navigate("/recipe");
  };

  const goBack = () => {
    navigate(-1);
  };

  const favhandler = () => {
    let copyfav = [...favroite];
    copyfav.push(data);
    setfavroite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));

    toast.success("Added to favorites!");
  };

  const unfavhandler = () => {
    const filterfav = favroite.filter((f) => f.id != data?.id);
    setfavroite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));

    toast.success("Removed from favorites!");
  };

  if (!data) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] md:w-[60%] xl:w-[40%] relative flex items-center justify-center">
          <div
            className="group absolute hover:shadow-lg flex items-center justify-start top-[10%] left-[0] w-[20px] hover:w-[60px] h-[30px] xl:w-[30px] hover:xl:w-[70px] xl:h-[40px] p-[3px]  xl:p-[6px] rounded-full bg-[#0E0D13] hover:bg-[#0E0D13]/80 hover:text-amber-400 border-l-2 active:border-l-0 cursor-pointer"
            onClick={goBack}
          >
            <IoCaretBackOutline />
            <span className="absolute left-[30%] top-1/2 -translate-y-1/2 rounded px-2 py-1 text-white text-xs invisible group-hover:visible whitespace-nowrap">
              Back
            </span>
          </div>

          <span className="text-2xl text-amber-400 font-semibold">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(updataHandler)}
      className="w-full rounded flex flex-col items-center justify-center relative"
    >
      <div className="relative flex items-center justify-center w-[90%] md:w-[60%] xl:w-[50%]">
        <div
          className="group absolute hover:shadow-lg flex items-center justify-start top-[10%] left-[0] w-[20px] hover:w-[60px] h-[30px] xl:w-[30px] hover:xl:w-[70px] xl:h-[40px] p-[3px]  xl:p-[6px] rounded-full bg-[#0b1221] hover:bg-slate-900 hover:text-amber-400 border-l-2 active:border-l-0 cursor-pointer"
          onClick={goBack}
        >
          <IoCaretBackOutline />
          <span className="absolute left-[30%] top-1/2 -translate-y-1/2 rounded px-2 py-1 text-white text-xs invisible group-hover:visible whitespace-nowrap">
            Back
          </span>
        </div>

        <div className="mt-5 w-[200px] max-h-[200px] md:w-[250px] xl:w-[300px] border-2 border-white/20 object-cover overflow-hidden flex items-center justify-center bg-[#0b1221] hover:bg-[#0b1221]/80 rounded-3xl hover:shadow-xl">
          {imgpreview && !imgLoadError ? (
            <img
              src={imgpreview}
              alt="food_img"
              className="w-full rounded-3xl  p-2 hover:scale-[100.8%] transition-all"
              onError={() => setimgLoadError(true)}
              onLoad={() => setimgLoadError(false)}
            />
          ) : (
            <div className="w-full h-[200px] flex items-center justify-center rounded-3xl border-2 border-white/20 border-b-2 border-b-amber-400 hover:scale-[100.8%] transition-all">
              <MdImageNotSupported className="w-[30%] h-[30%]" />
            </div>
          )}
        </div>

        <div>
          {favroite.find((f) => f.id == data?.id) ? (
            <FaHeart
              onClick={unfavhandler}
              className="absolute right-0 top-[15px] text-3xl z-20  text-[#EC0109]"
            />
          ) : (
            <FaRegHeart
              onClick={favhandler}
              className="absolute right-0 top-[15px] text-3xl z-20 text-[#EC0109]"
            />
          )}
        </div>
      </div>

      <div className="mt-5 w-full md:w-[60%] xl:w-[50%] flex flex-col items-center justify-center">
        
        <div className="w-full flex flex-col bg-[#10182B] p-3 rounded-r-2xl mt-5">
          {/* image url */}
        <div className="w-full flex flex-col items-start justify-start mt-3">
          <span className="text-amber-500 text-[12px] pl-3">Image link</span>
          <input
            type="url"
            placeholder="image URL"
            {...register("imgurl")}
            className="w-full bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
          />
        </div>

        {/* title */}
        <div className="w-full flex flex-col items-start justify-start mt-3">
          <span className="text-amber-500 text-[12px] pl-3">Recipe</span>
          <span className="text-red-500 text-[12px]">
            {" "}
            {errors.title && errors.title.message}{" "}
          </span>
          <input
            type="text"
            placeholder="title"
            {...register("title", { required: "Title cannot be empty!" })}
            className="w-full bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
          />
        </div>

        {/* description */}
        <div className="w-full flex flex-col items-start justify-start mt-3">
          <span className="text-amber-500 text-[12px] pl-3">Description</span>
          <span className="text-red-500 text-[12px]">
            {" "}
            {errors.desc && errors.desc.message}{" "}
          </span>
          <textarea
            placeholder="description"
            {...register("desc", { required: "Description cannot be empty!" })}
            className="w-full min-h-[150px] bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
          ></textarea>
        </div>

        {/* ingredients */}
        <div className="w-full flex flex-col items-start justify-start mt-3">
          <span className="text-amber-500 text-[12px] pl-3">Ingredients</span>
          <span className="text-red-500 text-[12px]">
            {" "}
            {errors.ingr && errors.ingr.message}{" "}
          </span>
          <textarea
            placeholder="write ingredients seperated by comma"
            {...register("ingr", {
              required: "Ingredients cannot be empty!",
            })}
            className="w-full min-h-[150px] bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
          ></textarea>
        </div>

        {/* category */}
        <div className="w-full flex flex-col items-start justify-start mt-3">
          <span className="text-amber-500 text-[12px] pl-3">Category</span>
          <select
            {...register("cat")}
            className="w-full bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snaks">Snaks</option>
            <option value="smoothies">Smoothies</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        {/* chef */}
        <div className="w-full flex flex-col items-start justify-start mt-3">
          <span className="text-amber-500 text-[12px] pl-3">Chef</span>
          <input
            type="text"
            placeholder="chef name"
            {...register("chef")}
            className="w-full bg-[#0b1221] hover:bg-slate-900 border-[#0b1221]/70 border-2 border-l-amber-400 rounded-r-2xl p-2 font-semibold  text-[16px]"
          />
        </div>
        </div>

        {/* submit btn */}
        <div className="w-full flex gap-10 px-5">
          <button className="bg-gradient-to-br hover:bg-gradient-to-tl from-slate-900 via-slate-900 to-slate-800 cursor-pointer p-3 w-1/2 mb-24 mt-5 rounded-2xl font-semibold text-amber-400 active:border-0 active:text-[17px] hover:bg-[#0e0d13c0 border-b-2 border-amber-400">
            Update
          </button>
          <button
            onClick={deleteHandler}
            className="bg-gradient-to-br hover:bg-gradient-to-tl from-slate-900 via-slate-900 to-slate-800 cursor-pointer p-3 w-1/2 mb-24 mt-5 rounded-2xl font-semibold text-red-500 active:border-0 active:text-[17px] hover:bg-[#0e0d13c0 border-b-2 border-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  );
};

export default SingleRecipe;
