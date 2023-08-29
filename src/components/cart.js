import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";


const Cart = () =>{
    
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.item);
    
    const removeFromCart = (index) =>{
        dispatch(removeItem(index));
    }
    const clearCartData = () =>{
        dispatch(clearCart());
    }

    return(
        cartItems.length>0 ?
        <div className="w-6/12 text-center ml-5">
            <h1 className="ml-2 font-semibold text-2xl">You Have Just Added: </h1>
            <ItemList data={cartItems} />
            <button className="border border-black rounded-xl cursor-pointer bg-slate-500 m-2 px-2" 
           onClick={()=>removeFromCart(1)}>Remove From Cart</button>
           <button className="border border-black rounded-xl cursor-pointer bg-slate-500 m-2 px-2" 
           onClick={()=>clearCartData()}>Clear Cart</button>
        </div>
        : "Please Add Items to Cart" 
        /* cartItems.length>0 ?
        <ul>
            <h1 className="ml-2 font-semibold text-2xl">You Have Just Added: </h1>
        {cartItems.map((item,index)=>{
           return<li className="ml-2 font-semibold text-xl" key={index}>{item} <button className="border border-black rounded-xl cursor-pointer bg-slate-500 m-2 px-2" 
           onClick={()=>removeFromCart(index)}>Remove From Cart</button></li>
        })}
        </ul>
        : "Please Add Items to Cart" */
    );
}
export default Cart;