import { Link } from "react-router-dom";
import { MdImageNotSupported } from "react-icons/md";

const RecipeCard = (props) => {
  const { id, imgurl, title, desc, ingr, cat, chef } = props.data;

  return (
    <Link to={`/recipe/detail/${id}`}>
      <div className="card flex flex-col gap-2 overflow-hidden items-start justify-between p-2 break-all hover:scale-105 transition-all">
        {/* image */}
        <div className="w-full">
          {imgurl ? (
            <img
              src={imgurl}
              alt="food_img"
              className="w-[100%] rounded-3xl border-2 border-white/20 p-2"
            />
          ) : (
            <MdImageNotSupported className="w-full h-full rounded-3xl border-2 border-white/20" />
          )}
        </div>
          {/* content */}
        <div className="w-full">
          {/* title */}
          <div className="w-full flex items-center justify-center">
            <h1 className="text-sm xl:text-lg font-semibold text-amber-300 mt-2 mb-3 underline">
            {" "}
            {title}{" "}
          </h1>
          </div>

          {/* category */}
          <p className="text-[13px] xl:text-[14px]">
            {" "}
            <span className="text-[10px] xl:text-[12px]">Category:</span> {cat}{" "}
          </p>

          {/* chef */}
          <small className="text-[13px] xl:text-[14px]">
            {" "}
            <span className="text-[10px] xl:text-[12px]">Chef:</span> {chef}{" "}
          </small>

          {/* description */}
          <p className="text-[13px] xl:text-[14px]">
            {" "}
            {desc.slice(0, 100)} ...{" "}
            <small className="text-[#FFD230]">more</small>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
