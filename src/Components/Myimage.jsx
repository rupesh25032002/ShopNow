import { useState } from "react";
import styled from "styled-components";

const Myimage = ({ image = [{ url: "" }] }) => {
  //state is used to set the main image and change the main image of product
  const [mainimage, setmainimage] = useState(image[0]);
  return (
    <Wrapper>
      <div className="multiple_image">
        {image.map((curr) => {
          return (
            <figure key={curr.url}>
              <img
                src={curr.url}
                alt={curr.filename}
                onClick={() => setmainimage(curr)}
              />
            </figure>
          );
        })}
      </div>

      <div className="main_image">
        <figure>
          <img src={mainimage.url} />
        </figure>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .multiple_image {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;

    figure {
      img {
        width: 125px;
      }
    }
  }

  .main_image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
      img {
        width: 250px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.Large}){
    .main_image figure img{
      width:200px;
    }
    .multiple_image figure img{
      width:100px;
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.Medium}) {
    flex-direction: column-reverse;
    .main_image {
      margin-bottom: 20px;
    }
    margin-bottom: 20px;
    .multiple_image {
      width: 95%;
      flex-direction: row;
      figure{
        margin:20px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.Small}) {
    .main_image figure img {
      width: 200px;
    }
    .multiple_image {
      flex-wrap: wrap;
      figure img {
        width: 85px;
      }
    }
  }
`;
export default Myimage;
