import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Pagenavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/" className="navlink">
        Home/
      </NavLink>
      <span>{title}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 5px;
  .navlink {
    color: #4848b1;
    text-decoration: none;
  }
  .navlink,
  span {
    font-size: 1.2em;
  }
`;
export default Pagenavigation;
