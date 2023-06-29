import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MyButton from "../Styles/MyButton";

const Herosection = (props) => {
  return (
    <Wrapper>
      {/* Information  Section */}
      <div className="herodata">
        <h3>Welcome To</h3>
        <h1>
          ShopNow <span>{props.data}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dolorum incidunt, earum sunt modi deserunt nobis iure nulla? Deleniti
          eveniet placeat asperiores officia excepturi minus tempora
          consequatur, vitae eaque, ipsa a praesentium repudiandae aliquid rerum
          architecto quod nobis officiis eligendi?
        </p>
        <NavLink to="/products">
          {" "}
          <MyButton style={{ width: "75px", marginBottom: "10px" }}>
            Shop
          </MyButton>
        </NavLink>
      </div>

      {/* Image section */}
      <div className="heroimage">
        <figure>
          <img src="Images/Home.jpg" alt="ShoppingImage" />
        </figure>
      </div>
    </Wrapper>
  );
};

// Css Styling with help Styled Component
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: auto;
  margin-top: 34px;
  font-family: "Poppins", sans-serif;

  .herodata {
    display: flex;
    flex-direction: column;
    h3{
      font-size: 1.5em;
      margin-bottom: 0px;
    }
    h1 {
      margin-top: 10px;
      font-size: 2.2em;
      font-weight: bold;
      color: rgb(215, 0, 73);

      span {
        color: black;
      }
    }
    p {
      font-size: 1.2em;
      word-break: break-all;
      padding: 20px 25px 10px 0px;
    }
    MyButton {
      padding: 20px 0px 10px 0px;
    }
  }

  .heroimage {
    margin-left: 10px;
    figure {
      img {
        max-width: 30em;
      }
    }
  }

  /* Media query*/

  @media (max-width: ${({ theme }) => theme.responsive.Large}) {
    width: 90vw;
    .herodata {
      font-size: 15px;
      p,
      MyButton {
        padding: 15px 0px 5px 0px;
      }
    }
    .heroimage {
      figure {
        img {
          max-width: 25em;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.Medium}) {
    font-size: 15px;
    flex-direction: column;
    .heroimage {
      margin-top: 10px;
      figure {
        img {
          max-width: 90vw;
        }
      }
    }
  }
`;

export default Herosection;
