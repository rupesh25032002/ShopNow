import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillShieldLockFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

const Service = () => {
  return (
    <Wrapper>
      {/* Box1 */}
      <div className="serviceBox serviceBox1">
        <TbTruckDelivery className="Serviceicon" />
        <p>Super Fast and free Delivery</p>
      </div>
      {/* Box2 */}
      <div className="serviceBox serviceBox2">
        <div className="serviceBox21">
          <BsFillShieldLockFill className="Serviceicon" />
          <p>Non-contact Shipping</p>
        </div>
        <div className="serviceBox21">
          <GiReceiveMoney className="Serviceicon" />
          <p>Money-back Guarantee</p>
        </div>
      </div>
      {/* Box3 */}
      <div className="serviceBox serviceBox3">
        <RiGitRepositoryPrivateFill className="Serviceicon" />
        <p>Super Secure payment System</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeded;
  .serviceBox1,
  .serviceBox3 {
    border-radius: 10px;
    background-color: white;

    p {
      text-align: center;
      font-weight: bold;
    }
  }
  .serviceBox {
    margin: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .Serviceicon {
      font-size: 2em;
      margin-bottom: 10px;
      color: rgb(215, 0, 73);
    }
    .serviceBox21 {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      width: 100%;
      margin: 10px 0px;

      border-radius: 10px;
      background-color: white;
      p {
        text-align: center;
        font-weight: bold;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.Medium}) {
    font-size: 15px;
    flex-direction: column;
    .serviceBox2 {
      flex-direction: row;
      width: 100%;
      .serviceBox21 {
        margin: 10px 20px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.Small}) {
    font-size: 13px;
  }
`;
export default Service;
