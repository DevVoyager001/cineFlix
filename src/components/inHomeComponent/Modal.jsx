import React,{useContext} from 'react'
import { cartContext } from '../../contexts/cartContext'

const Modal = ({modalData, handleModal}) => {
    const {addToCart ,cartItems, removeFromCart } = useContext(cartContext)
  return (
    <>
        <div className="container w-[500px] h-fit bg-[#202935] p-4 flex gap-6 relative rounded-sm">
            <span>
                <img className='h-56 w-40' src={modalData.imgLink} alt="" />
                {cartItems.includes(modalData)?<button className="addBtn w-40 h-8 mt-3 bg-red-400 text-black rounded-sm p-1 text-sm" onClick={() => {removeFromCart(modalData.id); handleModal() }}><i class="fa-solid fa-cart-shopping pr-1 text-sm"></i>Remove</button> : <button className="addBtn w-40 h-8 mt-3 bg-[#FBD244] text-black rounded-sm p-1 text-sm" onClick={() => {addToCart(modalData); handleModal() }}><i class="fa-solid fa-cart-shopping pr-1 text-sm"></i>Add to Cart</button>}
            </span>
            <div className="content text-[#7F8691] text-sm">
                <h1 className='text-lg text-white'>{modalData.name}</h1>
                <span className='flex gap-2 mt-1'>
                    <p>{modalData.year}</p>
                    <p>.</p>
                    <p>{modalData.time} minutes</p>
                </span>
                <span className='flex gap-2 mt-2'>
                    <p>{modalData.genre}</p>
                    <p>.</p>
                    <p>{modalData.rating}</p>
                    <p>.</p>
                    <p className='text-white'>${modalData.price}</p>
                </span>
                <hr className='my-2' />
                <p className='mt-2'>{modalData.description}</p>
            </div>
            <i className="fa-solid fa-xmark absolute top-3 right-3 text-white cursor-pointer" onClick={()=>handleModal()}></i>
        </div>
    </>
  )
}

export default Modal