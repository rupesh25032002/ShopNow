import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGetdata } from "./ContextApi/ContextProduct";
import styled from "styled-components";
import Pagenavigation from "./Components/Pagenavigation";
import Shipping from "./Components/Shipping";
import Myimage from "./Components/Myimage";
import Ratingstars from "./Components/Ratingstars";
import Mycolor from "./Components/Mycolor";
import FormatPrice from "./Components/MoneyConvert";
import Loader from "./Components/Loader";
import { useGetCartdata } from "./ContextApi/Cartcontextapi";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import MyButton from "./Styles/MyButton";
import Errorshow from "./Components/Errorshow";

const Singleproduct = () => {
  const { id } = useParams(); //getting id from url
  const API = `https://api.pujakaitem.com/api/products/?id=${id}`;
  const { singleLoading, singleError, singleProduct, getSingleproduct } =
    useGetdata();
  const {
    category,
    colors,
    company,
    description,
    image,
    name,
    price,
    reviews,
    stars,
    stock,
  } = singleProduct;
  const { setCart } = useGetCartdata();
  const [numberofproduct, setnumberofproduct] = useState(1);
  const [color, setcolor] = useState(null);
  const [colormsg, setcolormsg] = useState(false);
  //functionality to increment the product
  const incrementProduct = () => {
    numberofproduct < stock ? setnumberofproduct(numberofproduct + 1) : null;
  };
  //functionality to decrement the product
  const decrementProduct = () => {
    numberofproduct > 1 ? setnumberofproduct(numberofproduct - 1) : null;
  };
  //getting selected color value from Child component (Mycolor) and set into color state
  const selectedcolor = (data) => setcolor(data);

  //sending data to addcart
  const cartProduct = { id, color, name, price, stock, numberofproduct };
  const sendCartData = () => {
    setCart(cartProduct);
  };

  //showing message to select color
  const notSelectColor = () => {
    if (color) setcolormsg(false);
    else setcolormsg(true);
  };

  useEffect(() => {
    getSingleproduct(API);
  }, []);

  //Loader
  if (singleLoading) {
    return <Loader />;
  }
 
  if(singleError){
    return<Errorshow/>
  }
  return (
    <Wrapper>
      <div>
        <Pagenavigation title={name} />
        <Container>
          <div className="singleproduct_box">
            <div className="image_box">
              <Myimage image={image} />
            </div>
            <div className="data_box">
              <h3>{name}</h3>
              <Ratingstars stars={stars} />
              <p>{reviews}</p>
              <p className="mrp">
                MRP:{" "}
                <del>
                  <FormatPrice price={price} />
                </del>
              </p>
              <p className="deal">
                Deal of the day : <FormatPrice price={price - 50000} />
              </p>
              <p>{description}</p>
              <div className="Shipping_box">
                <Shipping />
              </div>
              <p className="available">
                Available :{" "}
                <span>{stock > 0 ? "In Stock" : "Not in Stock"}</span>
              </p>
              <p className="brand">
                Brand : <span>{company}</span>
              </p>
              <div className="colorbox">
                <p>Colors : </p>
                <Mycolor colors={colors} selectedcolor={selectedcolor} />
                {colormsg ? (
                  <p className="selectcolor">Please Select Color!!</p>
                ) : null}
              </div>
              {stock > 0 ? (
                <div className="addtocart_box">
                  <div className="numberof_product">
                    <button onClick={incrementProduct}>
                      <BsPlus className="icon" />
                    </button>
                    <p>{numberofproduct}</p>
                    <button onClick={decrementProduct}>
                      <BiMinus className="icon" />
                    </button>
                  </div>
                  <div>
                    <NavLink
                      to={color ? "/addtocart" : `/products/${id}`}
                      onClick={color ? sendCartData : notSelectColor}
                    >
                      <MyButton>Add To Cart</MyButton>
                    </NavLink>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};
const Wrapper=styled.div`
`;
const Container = styled.div`
 .singleproduct_box{
  display:flex;
 
  margin: auto;
  margin-top: 50px;

  .image_box,.data_box{
    flex:1;
    padding:10px;
  }
  .image_box{
    
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .data_box{
    padding:0px 20px;
    .mrp{
      font-weight:bold;
    }
    .deal{
      font-weight:bold;
      color:rgb(215, 0, 73);
      
    }
    .available span,.brand span{
      font-weight:bold;
    }
    .colorbox{
      display:flex;
      align-items:center;
      .selectcolor{
        font-weight:bold;
      }
    }
    .addtocart_box .numberof_product{
      display:flex;
      margin-bottom:10px;
      align-items:centr;
   
      button{
        background-color:transparent;
        border:0px;
        .icon{
          font-size:1.5em;
          font-weight:bold;
        }
      }
      p{
        margin:0px 5px;
      }
    }
  }
 }
 @media (max-width:${({ theme }) => theme.responsive.Large}){
  .singleproduct_box .data_box{
    font-size:14px;
  }
 }
 @media (max-width:${({ theme }) => theme.responsive.Medium}){
  .singleproduct_box{
    flex-direction:column;
  }
 }
 @media (max-width:${({ theme }) => theme.responsive.Small}) {
  .singleproduct_box .data_box{}
     font-size:14px;
  }
 }
`;
export default Singleproduct;
