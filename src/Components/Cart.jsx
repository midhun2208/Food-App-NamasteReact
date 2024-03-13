import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../Utils/cartSlices";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if(cartItems.length == 0) return <h1 className="text-center text-3xl p-4 m-4">Add some items to the cart</h1>

  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="font-bold text-xl">Cart</h1>
        <div className="m-auto w-6/12">
            <button className="p-2 m-2 rounded-lg shadow-lg bg-red-700 text-white" onClick={()=>dispatch(clearItem())}>Clear-Cart</button>
            
            <ItemList items={cartItems}/>
        </div>
      </div>
    </>
  );
};

export default Cart;
