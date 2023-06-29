import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "./MoneyConvert";
const Listproduct = (curr) => {
  const { id, name, category, image, company, price, description } = curr;
  
  return (
    <Wrapper>
      <div className="imagebox">
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="databox">
        <p className="productname">{name}</p>
        <p className="productprice">
          <FormatPrice price={price} />
        </p>
        <p className="productdescription">
          {description.slice(0, 150) + "..."}
        </p>
        <NavLink className="navlink" to={`/products/${id}`}>
          <button>Read More</button>
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 15px 0px;
  flex: 1;
  display: flex;
  width: 90%;
  padding: 10px;
  .imagebox {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    figure {
      margin: 0px;
      img {
        width: 315px;
      }
    }
  }

  .databox {
    padding: 0px 15px;
    flex: 1;
    .productname {
      font-size: 1.2em;
      font-weight: bold;
      margin: 5px;
    }
    .productprice {
      font-weight: bold;
    }
    .productprice,
    .productdescription {
      font-size: 1em;
      margin: 5px;
    }
    .navlink button {
      border: 2px solid;
      outline: none;
      padding: 7px;
      font-size: 1em;
      color: #4848b1;
      border-radius: 3px;
      font-weight: bold;
      background-color: white;

      &:hover {
        border: 2px solid black;
        color: black;
      }
    }
  }

  //Media query
  @media (max-width: ${({ theme }) => theme.responsive.Extralarge}) {
    .databox {
      font-size: 15px;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.Large}) {
    width: 100%;

    .imagebox figure img {
      width: 250px;
    }
    .databox {
      font-size: 12px;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.Small}) {
    flex-direction: column;
    .databox {
      margin-top: 20px;
    }
  }
`;
export default Listproduct;
