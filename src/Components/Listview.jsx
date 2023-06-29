import React from 'react'
import styled from "styled-components"
import Listproduct from './Listproduct'
const Listview = ({products}) => {
  return (
    <Wrapper>
      {
        products.map((curr)=>{
          return(
            <Listproduct key={curr.id} {...curr}/>
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export default Listview
