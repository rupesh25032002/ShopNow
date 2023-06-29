import React from "react";
import styled from "styled-components";
const Loader = () => {
  return (
    <Wrapper>
      <h1>Loading...</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 1.8em;
`;
export default Loader;
