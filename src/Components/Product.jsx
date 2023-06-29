import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrice from "./MoneyConvert";
const Product = (curr) => {
  const { id, name, category, image, company, price } = curr;

  return (
    <Wrapper>
      <NavLink className="navlink" to={`/products/${id}`}>
        <figure>
          <img src={image} alt={name} />
          <figcaption>{category}</figcaption>
        </figure>
        <div className="card-data">
          <h3>{name}</h3>
          <p>
            <FormatPrice price={price} />
          </p>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
border:2px solid #e9e1e1;
margin-bottom:50px;
padding:10px;

.navlink{
  display:flex;
  flex-direction:column;
  position:relative;
  width:280px;
  text-decoration:none;

  figure{
    position:relative;
    width:100%;
    margin:0px;

   &:hover{ &::before{
      content:"";
      position:absolute;
      top:0px;
      left:0px;
      width:100%;
      height:100%;
      background-color:black;
      opacity:0.5;
    }
  }
   
    img{
      width:280px;
    }

    figcaption{
    position: absolute;
    top: 10px;
    right: 18px;
    padding: 2px 5px;
    font-size: 1em;
    color: black;
    background-color: #f3f3f3;
    border-radius: 3px;
    }
  }
  .card-data{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h3,p{
      margin-bottom:1px;
      margin-top:5px; 
      font-size: 1em;
      color:rgb(72, 72, 177);
    }
  }
}

@media (max-width:${({ theme }) =>
  theme.responsive.Extralarge}) and (min-width:${({ theme }) =>
  theme.responsive.Medium}) {
  .navlink{
    width:200px;

    figure{
      img{
        width:200px;
      }
    }
  }
}

@media (max-width:${({ theme }) => theme.responsive.Medium}){
  .navlink{
    width:250px;

    figure{
      img{
        width:250px;
      }
    }
  }
`;
export default Product;
