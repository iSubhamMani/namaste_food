import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-8 mb-[50px] w-[60%] px-4 py-8 mx-auto max-w-screen-xl  rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-[#3D006B]">
          {cartItems.length === 0
            ? "Cart Empty!"
            : `Cart Items (${cartItems.length})`}
        </h1>

        <button
          className="font-medium text-sm bg-[#3D006B] text-white py-2 px-4 rounded-full"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div>
        <MenuItems data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
