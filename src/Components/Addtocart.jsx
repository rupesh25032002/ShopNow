import React from "react";
import styled from "styled-components";
import { useGetCartdata } from "../ContextApi/Cartcontextapi";
import Cartrow from "./Cartrow";
import Loader from "./Loader";
import FormatPrice from "./MoneyConvert";

const Addtocart = () => {

  //getting required data from Cartcontextapi
  const { cart, total_price, shipping_price, clearCart } = useGetCartdata();

  return cart.length ? (
    <Wrapper>
      <div className="cart-box">
        <table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <Cartrow cart={cart} />
        </table>
      </div>

      <div className="cart_box2">
        <div className="clear-cart">
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className="cart_amount">
          <p>
            Subtotal : <FormatPrice price={total_price} />{" "}
          </p>
          <p>
            Shipping : <FormatPrice price={shipping_price} />{" "}
          </p>
          <p>
            Total : <FormatPrice price={total_price + shipping_price} />
          </p>
        </div>
      </div>
    </Wrapper>
  ) : (
    
    //if there is 0 item in the cart show this
    <Noitem className="noitem">
      <h1>No items in the Cart !!</h1>
    </Noitem>
  );
};

//styling

const Wrapper = styled.div`
  margin-top: 50px;
  .cart-box {
    display: flex;
    justify-content: center;
    align-items: center;
    table {
      width: 80vw;
      thead tr {
        background-color: rgb(215, 0, 73);
        th {
          padding: 10px 20px;
          text-align: center;
          color: white;
          font-size: 1em;
        }
      }
    }
  }

  .cart_box2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    width: 80vw;
    border-top: 1px solid;
    .clear-cart,
    .clear-btn {
      border: 0px;
      padding: 3px 5px;
      background-color: red;
      color: white;
      font-size: 1em;
      font-family: 'Poppins', sans-serif;
    }
    .cart_amount {
      p {
        font-weight: bold;
        font-size: 1em;
      }
    }
  }

  // media query 

  @media (max-width: ${({ theme }) => theme.responsive.Medium}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.Small}) {
    font-size: 10px;
    .cart-box table {
      width: 96vw;
      .cart_box table{
        width: 96vw;
        font-size: 9px;
      }
      thead tr th {
        padding: 5px ;
      }
    }
  }
`;


const Noitem = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
`;
export default Addtocart;
