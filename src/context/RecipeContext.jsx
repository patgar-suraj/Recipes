import { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [recipe, setrecipe] = useState([
    {
      id: 1,
      imgurl: "https://static.vecteezy.com/system/resources/previews/026/774/625/non_2x/thai-roti-with-ai-generated-free-png.png",
      title: "Classic Margherita Pizza",
      ingr: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.dfhd dfbgdfg sdfgdfbgdf dfgdfsgdfs Dolorem, tempore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, tempore.dfghjfgjfgjfgjfgjfgjmfgjkghjjfgjrtj terherther ertherh ertherhe rhrher h",
      cat: "lunch",
      chef: "master",
    },
    {
      id: 2,
      imgurl: "https://static.vecteezy.com/system/resources/previews/059/443/617/non_2x/korean-noodle-with-beef-photo.jpg",
      title: "Classic Margherita Pizza",
      ingr: [
        "dosa dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      desc: "Lorem ipsum,",
      cat: "breakfast",
      chef: "source",
    },
    {
      id: 3,
      imgurl: "https://static.vecteezy.com/system/resources/previews/047/825/562/non_2x/idli-against-transparent-background-free-png.png",
      title: "Classic Pizza",
      ingr: [
        "idli dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      desc: "Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit.dfhd dfbgdfg sdfgdfbgdf dfgdfsgdfs Dolorem, tempore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, tempore.dfghjfgjfgjfgjfgjfgjmfgjkghjjfgjrtj terherther ertherh ertherhe rhrher h adipisicing elit. Dolorem, tempore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, tempore.dfghjfgjfgjfgjfgjfgjmfgjkghjjfgjrtj terherther ertherh ertherhe rhrher h",
      cat: "lunch",
      chef: "ninja",
    },
    {
      id: 4,
      imgurl: "https://static.vecteezy.com/system/resources/previews/022/944/864/non_2x/masala-dosa-with-sambhar-illustration-south-india-favorite-food-free-png.png",
      title: "Classic Pizza",
      ingr: [
        "idli dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, tempore.",
      cat: "dinner",
      chef: "stranger",
    },
    {
      id: 5,
      imgurl: "https://static.vecteezy.com/system/resources/previews/047/825/356/non_2x/dosa-against-transparent-background-free-png.png",
      title: "Classic Pizza",
      ingr: [
        "idli dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, tempore.",
      cat: "dinner",
      chef: "kunal",
    },
  ]);

  return (
    <recipecontext.Provider value={{ recipe, setrecipe }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
