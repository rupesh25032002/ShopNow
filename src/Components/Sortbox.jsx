import React from "react";
import styled from "styled-components";
import { MdGridView, MdFormatListBulleted } from "react-icons/md";
import { useFilterdata } from "../ContextApi/Filtercontextapi";
import { useState } from "react";
const Sortbox = () => {
  const { grid_view, setGridview, setListview, setSortValue, filterproducts } =
    useFilterdata();

  const [activeview, setActiveView] = useState("grid"); //toggle between grid view and list view
  return (
    <Wrapper>
      <div className="viewbtns">
        <button
          onClick={() => {
            setGridview();
            setActiveView("grid");
          }}
          className={activeview === "grid" ? "active" : ""}
        >
          <MdGridView />
        </button>

        <button
          onClick={() => {
            setListview();
            setActiveView("list");
          }}
          className={activeview === "list" ? "active" : ""}
        >
          <MdFormatListBulleted />
        </button>
      </div>
      <p className="totalproduct">Total Products : {filterproducts.length}</p>
      <div>
        <form>
          <label htmlFor="select" />
          <select id="select" onClick={setSortValue} className="sortcontainer">
            <option value="lowest">Lowest</option>
            <option value="highest">Higest</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
padding:10px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
  &>div:nth-child(n){
    margin:0px 15px;
  }
  
  .viewbtns{
      display:flex;
 button{
    font-size:1.3em;
    margin: 0px 3px;
    border: 1px solid;
    background-color:transparent;
    display:flex;
    align-items:center;
    padding:5px;
    
  }
}
  .viewbtns .active{
      color:white;
      background-color:black;
      border:0px;
    }
  }

  .totalproduct{
    font-weight:bold;
    font-size:1.2em;
    
  }

  .sortcontainer{
    padding:5px 15px;
      outline:none;
      font-family: 'Poppins', sans-serif;
  }
  @media (max-width:${({ theme }) => theme.responsive.Small}){
    &>div:nth-child(n){
      margin:0px 0px;
    }
    .totalproduct{
      display:none;
    }
  }
`;
export default Sortbox;
