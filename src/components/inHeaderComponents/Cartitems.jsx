import React, { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";

const Cartitems = () => {
  const { cartItems, removeFromCart } = useContext(cartContext); 
  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      {cartItems.map((item) => {
        return (
          <>
          <div className="flex items-center justify-between gap-2 py-2 text-white" key={item.id}>
            <div className="flex gap-1"><img className="img w-10 h-10" src={item.imgLink} alt="" />
            <div className="content text-sm">
              <p>{item.name}</p>
              <p className="text-[#7F8691] text-sm">{item.price}</p>
            </div>
            </div>
            <div>
              <i className="fa-solid fa-xmark pl-9 cursor-pointer text-[#8C8F97]" onClick={()=>removeFromCart(item.id)}></i>
            </div>
          </div>
          <hr className="bg-black text-[#8C8F97]"/>
          </>
        );
      })}
       <div className="calc text-sm flex justify-between pt-3">
            <h1 className="text-[#7F8691]">No of movies <br /><span className="text-white">{cartItems.length}</span></h1>
            <h1 className="text-[#7F8691]">Total Cost <br /><span className="text-white">${totalCost}</span></h1>
        </div>
        <div className="buttons flex flex-col gap-2 pt-3">
        <button className="addBtn w-[98%] h-9 bg-[#FBD244] text-black rounded-sm p-1 text-sm" onClick={()=>addToCart(data)}><i class="fa-solid fa-cart-shopping pr-1 text-sm"></i>Checkout</button>
        <button className="detailsBtn w-[98%] h-9 text-[#8C8F97] border border-solid border-[#7F8691] rounded-sm p-1 text-sm">Continue Shopping</button>
        </div>
    </>
  );
};

export default Cartitems;
