import { Link } from "react-router-dom";
import { MdImageNotSupported } from "react-icons/md";
import { useState } from "react";

const RecipeCard = (props) => {
  const { id, imgurl, title, desc, cat, chef } = props.data;

  const [imgError, setimgError] = useState(false);

  const more = <span className="text-[#FFD230]">...more</span>;

  return (
    <Link to={`/recipe/detail/${id}`}>
      <div className="card flex flex-col gap-2 overflow-hidden items-center justify-start p-2 break-all hover:scale-105 transition-all">
        {/* image */}
        <div className="w-full h-[130px] xl:h-[180px] flex items-center justify-center object-cover overflow-hidden rounded-3xl border-2 border-white/20">
          {imgurl && !imgError ? (
            <img
              src={imgurl}
              alt="food_img"
              className="w-[100%]"
              onError={() => setimgError(true)}
            />
          ) : (
            <MdImageNotSupported className="w-full h-full" />
          )}
        </div>

        {/* content */}
        <div className="w-full">
          {/* title */}
          <div className="w-full flex items-center justify-center">
            <h1 className="text-sm xl:text-lg font-semibold text-amber-300 mt-2 mb-3 underline">
              {" "}
              {title.slice(0, 17)} <span>{title.length > 17 ? "..." : ""}</span>{" "}
            </h1>
          </div>

          {/* category */}
          <p className="text-[13px] xl:text-[14px]">
            {" "}
            <span className="text-[10px] xl:text-[12px] text-amber-200">
              Category:
            </span>{" "}
            {cat.charAt(0).toUpperCase() + cat.slice(1, 17).toLowerCase()}
            <span>{cat.length > 20 ? "..." : ""}</span>{" "}
          </p>

          {/* chef */}
          <small className="text-[13px] xl:text-[14px]">
            {" "}
            <span className="text-[10px] xl:text-[12px] text-amber-200">
              Chef:
            </span>{" "}
            {chef.slice(0, 20)}
            <span>{chef.length > 20 ? "..." : ""}</span>{" "}
          </small>

          <div className="w-full flex items-center justify-center gap-2">
            <div className="w-[25%] h-[1px] my-2 bg-white/90"></div>
            <span className="w-[50%] text-[10px] xl:text-[12px] text-amber-200 flex items-center justify-center">
              Description
            </span>
            <div className="w-[25%] h-[1px] my-2 bg-white/90"></div>
          </div>

          {/* description */}
          <p className="text-[12px] xl:text-[14px]">
            {" "}
            {desc.slice(0, 105)} <span>{desc.length > 105 ? more : ""}</span>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
