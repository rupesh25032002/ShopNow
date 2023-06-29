import { useReducer } from "react";
import { useEffect } from "react";
import { useContext,createContext } from "react";
import reducer from "../reducer/cartreducer"

const cartContextApi=createContext(); //create contextApi

//getting cart data from local storage
const getLocalcartdata=()=>{
  let data=JSON.parse(localStorage.getItem("cart"));
  if(data===null) return []
  else return data
}

//initial state of useReducer
const initialState={
  cart:getLocalcartdata(), //local storage cart data get assigned 
  total_item:0,
  total_price:"",
  shipping_price:50000,
}

//Povider
const CartProvider=({children})=>{
  const [state,dispatch]=useReducer(reducer,initialState);

  //to set cart data when user click to addcart btn
   const setCart=(alldata)=>{
      dispatch({type:"SET_CART",payload:alldata})
   }

   //to remove cart when user click on remove btn
   const removeCart=(removeid)=>{
     dispatch({type:"REMOVE_CART",payload:removeid})
    console.log(removeid)
 }

 //to clear all cart-items when user click on Clearcart btn
 const clearCart=()=>{
  dispatch({type:"CLEAR_CART"})
 }

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state.cart));//setting cart data to local storage
    dispatch({type:"SET_TOTAL_PRICE_AND_ITEM"}) //setting total price and total item of the cart
  },[state.cart])

      return(
        <cartContextApi.Provider value={{...state,setCart,removeCart,clearCart}}>
          {children}
        </cartContextApi.Provider>
      )
}


//Consumer
const useGetCartdata=()=>{
  return useContext(cartContextApi);
}

export {useGetCartdata,CartProvider};