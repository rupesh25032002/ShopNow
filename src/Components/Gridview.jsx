import Product from './Product'
import styled from "styled-components"
const Gridview = ({products}) => {
  return (
  <Wrapper>
    {products.map((curr)=>{
      return(
        <Product key={curr.id} {...curr} classname="product" />
      )
    })}
  </Wrapper>

  )
}

const Wrapper=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
.product{
  flex:1;
}
`;
export default Gridview
