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
    <div className="mt-8 mb-[50px] w-[60%] px-4 py-8 mx-auto max-w-screen-xl border-t-4 border-t-[#F1B4BB] rounded-lg shadow-xl">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-[#132043]">
          {cartItems.length === 0
            ? "Cart Empty!"
            : `Cart Items (${cartItems.length})`}
        </h1>

        <button
          className="font-semibold text-sm bg-[#132043] text-[#FDF0F0] py-2 px-4 rounded-full"
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
