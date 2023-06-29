import styled from "styled-components";
import { useState, useEffect } from "react";
import { BiCheck } from "react-icons/bi";
import { Fragment } from "react";

const Mycolor = ({ colors = [], selectedcolor }) => {
  //state which help to know about which color get selected
  const [tick, settick] = useState(null);

  useEffect(() => {
    //passing the tick value to the parents component
    selectedcolor(tick);
  }, [tick]);

  return (
    <Wrapper>
      {colors.map((curr,index) => {
        return (
          <Fragment key={index}>
            <button
              style={{ backgroundColor: curr }}
              onClick={() => settick(curr)}
            >
              {tick === curr ? <BiCheck className="check" /> : ""}
            </button>
          </Fragment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0px solid;
    margin: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    .check {
      color: white;
    }
  }
`;
export default Mycolor;
