import React, { useState, useContext } from 'react'
import Cart from './inHeaderComponents/Cart'
import { cartContext } from '../contexts/cartContext'

const Header = () => {
const {cartItems} = useContext(cartContext)
const [showCart, setShowCart] = useState(false)

function handleShowCart(){
  setShowCart(showCart==true? false:true)
}

  return (
    <>
    <div className='w-[100vw] h-12 bg-[#111825] text-white flex items-center justify-between p-3 fixed top-0'>
        <h1 className='text-xl px-5'><i class="fa-solid fa-video pr-1"></i> Cineflix</h1>
        <div className='px-5 relative text-xl'>
        <i className="fa-regular fa-bell pl-4 cursor-pointer "></i>
        <i className="fa-solid fa-cart-shopping pl-4 cursor-pointer" onClick={handleShowCart}></i>
        <div className='h-4 w-4 flex items-center justify-center rounded-full bg-yellow-300 text-black text-[10px] absolute right-[30%] top-[-5px]'>{cartItems.length}</div>
        <i className="fa-regular fa-user pl-4 cursor-pointer"></i>
        </div>
    </div>
    {showCart==true && <Cart/>}
    </>
  )
}

export default Header