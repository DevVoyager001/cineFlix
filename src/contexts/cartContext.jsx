import React, {createContext, useState} from "react";

export const cartContext = createContext()

const Cartprovider = (props)=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (movie) => {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems, movie];
            return updatedItems;
        });
    };
    

    const removeFromCart = (movieId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== movieId));
     };

    return(
        <cartContext.Provider value={{addToCart, removeFromCart, cartItems}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default Cartprovider;