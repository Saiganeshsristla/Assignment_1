import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";

const Cart = function () {

  const item = useSelector(store => store.cart.items);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItems());
  }


  return (
    <div className="p-5 mb-[450px]">
      <h1 className="p-2 m-2 font-semibold text-2xl inline">cart items-{item.length}</h1>
      <button className="p-2 m-2 bg-gray-200" onClick={() => handleClear()}>Clear</button>
      {item.map(item => <h1 className="p-2 m-2 font-semibold text-xl">{item}-Added</h1>)}
    </div>
  );
};

export default Cart;
