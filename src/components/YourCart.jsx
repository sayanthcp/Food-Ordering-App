import { TbShoppingCartHeart } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { removefromcart } from "../Redux/features/AddCartSlice";
import { useDispatch } from "react-redux";

const YourCart = () => {

  const dispatch = useDispatch();

  //redux data
  const originalData = useSelector((state) => state.cart);

  
  return (
    <div className="w-full py-20 px-8">
      <div className="flex justify-center items-center  py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mr-2">
          Your Cart
        </h1>
        <div className="text-3xl md:text-4xl font-bold text-red-500">
          <TbShoppingCartHeart />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1280px] mx-auto my-8">
          {originalData?.cartItems.map((item, index) => {
            return (
              <div key={index} className="relative">
                <img
                  className="whitespace-normal border-2"
                  src={item?.strMealThumb}
                  alt=""
                />
                <h2 className="absolute bottom-0 left-0 right-0 text-center bg-black/50 text-white p-2 font-bold text-lg">
                  {item?.strMeal}
                </h2>
                <div>
                  <button
                    onClick={() =>
                      dispatch(removefromcart(item?.idMeal))
                    }
                  >
                    <AiFillCloseCircle
                      size={25}
                      className="bg-white absolute top-1 right-1 rounded-full text-black cursor-pointer hover:text-red-600"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YourCart;
