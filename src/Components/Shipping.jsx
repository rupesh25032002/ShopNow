import React from "react";
import styled from "styled-components";
import { CiDeliveryTruck, CiTrophy } from "react-icons/ci";
import { TbReplaceFilled } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";

const Shipping = () => {
  const shipping_array = [
    { data: "Free Delivery", icon: <CiDeliveryTruck /> },
    { data: "30 Days Replacement", icon: <TbReplaceFilled /> },
    { data: "Top Brand", icon: <CiTrophy /> },
    { data: "2 Year Warranty", icon: <FaHandshake /> },
  ];

  return (
    <Wrapper>
      {shipping_array.map(({ data, icon },index) => {
        return (
          <div className="box" key={index}>
            <div className="icon">{icon}</div>
            <p>{data}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0px 10px;
    flex: 1;
    .icon {
      font-size: 1.8em;
    }
    p {
      margin-top: 0px;
      text-align: center;
      font-size: 0.7em;
      font-weight: bold;
    }
  }
`;
export default Shipping;
