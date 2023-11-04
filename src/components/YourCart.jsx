import { TbShoppingCartHeart } from "react-icons/tb";
import { useSelector } from "react-redux/es/hooks/useSelector";
import YourCartItems from "./YourCartItems";

const YourCart = () => {


  //redux data
  const originalData = useSelector((state) => state.cart);

  
  return (
    <div className="w-full py-20 px-8">
      <div className="flex justify-center items-center  py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mr-2">
          Your Cart
        </h1>
        <div className="text-3xl md:text-4xl font-bold text-yellow-400">
          <TbShoppingCartHeart />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1280px] mx-auto my-8">
          {originalData?.cartItems.map((item, index) => {
            return (
             
              <YourCartItems item={item} index={index}/>
             
            );
          
          })}
        </div>
      </div>
    </div>
  );
};

export default YourCart;
