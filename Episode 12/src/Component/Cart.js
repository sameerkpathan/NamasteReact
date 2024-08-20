import { removeAll, removeItems } from "../Utils/ReduxToolkit/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

  //we can subscribe the store sing selector
  const CartItems = useSelector((store) => store.cart.items);

  // console.log(CartItems);

  //now we can get the action using dispatch and send a payload on the basis of action 
  const dispatch = useDispatch();

  const handleClick = ()=>{

    CartItems !=0 ?  dispatch(removeAll()) : alert("Please Add some Item First");
  }

  const handleClickRemove = ()=>{
     dispatch(removeItems());
  }

  return (
    <div className="text-center p-5 m-5">
      <h1 className="text-2xl font-bold">cart</h1>

      <div className="w-6/12 m-auto">

   <button className="p-2 m-2 bg-black text-white rounded" onClick={handleClick}>Clear Cart</button> 
   <button className="p-2 m-2 bg-black text-white rounded" onClick={handleClickRemove}>Remove Item</button>

   {CartItems.length === 0 ? <h1>Your Cart Is Empty</h1> : ""}
    <ItemList ItemLists={CartItems} />
      </div>
      <div>
        <h1>Total Value = {CartItems.map((CartElement)=>
        <span>  {CartElement?.card?.info?.price/100}  </span>
        )}</h1>
      </div>
    </div>
  );
};

export default Cart;
