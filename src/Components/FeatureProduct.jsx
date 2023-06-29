import { useContext } from "react";
import { useGetdata } from "../ContextApi/ContextProduct";
import styled from "styled-components";
import Product from "./Product";
import Loader from "./Loader";
import Errorshow from "./Errorshow";

const FeatureProduct = () => {
  const { isLoading, isError, featureProducts, products } = useGetdata();

  //Loader
  if (isLoading) {
    return <Loader />;
  } else if (!isError) {
    return (
      <Wrapper>
        <div className="featureservice_box">
          <div className="feature_heading">
            <p>CHECK OUT NOW!</p>
            <h3>Our Feature Services</h3>
          </div>
          <div className="featureproduct_box">
            {featureProducts.map((curr) => {
              return <Product key={curr.id} {...curr} />;
            })}
          </div>
        </div>
      </Wrapper>
    );
  }

  //if there is Error found
  else {
    return <Errorshow />;
  }
};

const Wrapper = styled.section`
margin-top:50px;
.featureservice_box{
  width:80vw;
  margin:auto;

  .feature_heading{
    margin-bottom:50px;
    p{
  color:rgb(72, 72, 177);
    }
    h3{
     font-weight:bold;
     font-size:2.2em;
    }
  }
}
 .featureproduct_box{
  display:flex;
  justify-content:space-evenly;
  align-items:center;
 }

 //Media query
 @media (max-width:${({ theme }) => theme.responsive.Extralarge}){
  .featureservice_box{
    width:90vw;
  }
 }
 @media (max-width:${({ theme }) => theme.responsive.Medium}){
  .featureservice_box{
    .feature_heading{
      h3{
        text-align:center;
      }
    }
  }
  .featureproduct_box{
    flex-direction:column;
    }
  }
 }
`;
export default FeatureProduct;
