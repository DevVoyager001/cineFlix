import React,{useContext} from 'react'
import Cartitems from './Cartitems'
import { cartContext } from '../../contexts/cartContext'

const Cart = () => {
  const {cartItems} = useContext(cartContext)
  return (
    <>
      <div className="container bg-[#202A36] w-72 h-fit fixed top-12 right-12 px-4 pb-4 pt-2 max-h-[70vh] overflow-auto rounded-md">
      {cartItems.length == 0 ? <h1 className='text-white'>No movies in the cart</h1> : <Cartitems/>}
      </div>
    </>
  )
}

export default Cart