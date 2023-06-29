import styled from "styled-components"
const MyButton = styled.button`
  padding: 7px 12px 7px 12px;
  font-size: 1.1em;
  border-radius: 4px;
  border:0px solid;
  background-color: rgb(215, 0, 73);
  color: white;
  font-family: 'Poppins', sans-serif;
  &:hover{
    font-size: 1em;
  }
  @media(max-width:${({theme})=>theme.responsive.Small}){
    padding: 6px 10px 6px 10px;
    font-size:0.9em;
  }
`;

export default MyButton;