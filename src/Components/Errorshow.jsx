import styled from "styled-components";
const Errorshow = () => {
  return (
    <Wrapper>
      <h1>Network issue, Please Refresh the Page !! </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    padding: 20px;
    font-size: 1.8em;
  }
`;

export default Errorshow;
