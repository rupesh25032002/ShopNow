import React from "react";
import MyButton from "./Styles/MyButton";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>UH OOH! You're lost.</h2>
      <p>
        This Page is not found , You can go back to Home Page through click on
        the below Button. Thank You!{" "}
      </p>
      <div>
        <NavLink to="/">
          <MyButton>Go Back to Home</MyButton>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
`;
export default ErrorPage;
