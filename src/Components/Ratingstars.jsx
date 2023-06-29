import styled from "styled-components"
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs"
import { Fragment } from "react";
const Ratingstars=({stars})=>{
  const allstars=[1,2,3,4,5];
  return(
      <Wrapper>
        {
          allstars.map((curr)=>{
            return(
              <Fragment key={curr}>{
              stars>=curr?
              <BsStarFill className="star"/>
              :stars>=curr-0.5?
              <BsStarHalf className="star"/>:
              <BsStar className="star"/>
              }
              </Fragment>
          
            )
          })
        }
      </Wrapper>
  )
}

const Wrapper = styled.div`
dispaly:flex;
justify-content:flex-start;

&:nth-child(n+2){
  color:#d7d71f;
}

`;
export default Ratingstars;