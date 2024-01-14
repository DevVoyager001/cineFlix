import React,{useContext} from "react";
import movieData from "../../utils/movieData.json";
import { cartContext } from "../../contexts/cartContext";

const Moviecard = ({handleModal}) => {
const {addToCart, cartItems, removeFromCart} = useContext(cartContext)
  return (
    <>
      {movieData.map((data) => {
        return (
          <div
            className="container w-64 min-h-[400px] bg-[#0B111C] text-white p-1 rounded-sm" key={data.id}>
            <img className="w-[100%] h-[70%]" src={data.imgLink} alt="" />
            <div className="content pt-2 px-2">
              <h1>{data.name}</h1>
              <div className="flex gap-3 text-[#7F8691] text-sm pt-2">
                <p>{data.genre}</p>  
                <span>.</span>
                <p><i className="fa-solid fa-star text-sm pr-1"></i>{data.rating}</p>
                <span>.</span>
                <p>${data.price}</p>
              </div>
              <div className="flex gap-2 justify-center items-center pt-3">
                {cartItems.includes(data)?<button className="addBtn w-[49%] h-9 bg-red-400 text-black rounded-sm p-1 text-sm" onClick={()=>removeFromCart(data.id)}><i class="fa-solid fa-cart-shopping pr-1 text-sm"></i>Remove</button>:<button className="addBtn w-[49%] h-9 bg-[#FBD244] text-black rounded-sm p-1 text-sm" onClick={()=>addToCart(data)}><i class="fa-solid fa-cart-shopping pr-1 text-sm"></i>Add</button>}
                <button className="detailsBtn w-[49%] h-9 text-[#8C8F97] border border-solid border-[#202833] rounded-sm p-1 text-sm" onClick={()=>handleModal(data)}>view Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Moviecard;
