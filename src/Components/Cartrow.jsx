import React from "react";
import styled from "styled-components";
import FormatPrice from "./MoneyConvert";
import { MdDelete } from "react-icons/md";
import { useGetCartdata } from "../ContextApi/Cartcontextapi";
const Cartrow = ({ cart }) => {
  const { removeCart } = useGetCartdata(); //function which remove item from the cart
  return (
    <Wrapper>
      {cart.map((curr,index) => {
        return (
          <tr key={index}>
            <td>
              <div>{curr.item}</div>
              <div className="colorbox">
                color :{" "}
                <button
                  className="colorbtn"
                  style={{ backgroundColor: curr.color }}
                ></button>
              </div>
            </td>
            <td>
              <FormatPrice price={curr.price} />
            </td>
            <td>{curr.qty}</td>
            <td>
              <FormatPrice price={curr.subtotal} />
            </td>
            <td>
              <MdDelete
                className="removeicon"
                onClick={() => removeCart(curr.id)}
              />
            </td>
          </tr>
        );
      })}
    </Wrapper>
  );
};

//Styling
const Wrapper = styled.tbody`
  tr td {
    padding: 10px 20px;
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    .colorbox {
      display: flex;
      align-items: center;
      justify-content: center;
      .colorbtn {
        height: 20px;
        width: 20px;
        border: 0px;
        border-radius: 50%;
        margin-left: 5px;
      }
    }
    .removeicon {
      font-size: 1.5em;
      color: red;
    }
  }

  //Media query
  @media (max-width: ${({ theme }) => theme.responsive.Small}) {
    tr td {
      padding: 5px;
      .colorbox .colorbtn {
        height: 15px;
        width: 15px;
      }
    }
  }
`;
export default Cartrow;
