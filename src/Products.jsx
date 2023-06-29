import { all } from "axios";
import { Fragment, useState } from "react";
import styled from "styled-components";
import Gridview from "./Components/Gridview";
import Listview from "./Components/Listview";
import Loader from "./Components/Loader";
import FormatPrice from "./Components/MoneyConvert";
import Mycolor from "./Components/Mycolor";
import Sortbox from "./Components/Sortbox";
import { useFilterdata } from "./ContextApi/Filtercontextapi";
import { useGetdata } from "./ContextApi/ContextProduct";
import Errorshow from "./Components/Errorshow";

const Products = () => {
  const {
    price,
    filterproducts,
    grid_view,
    setGridview,
    setListview,
    updateFilter,
    filter,
    allproducts,
    clearFilter,
  } = useFilterdata();

  const { category, company, color } = filter;
  const { isLoading, isError } = useGetdata();
  //active filters
  const [activeFilter, setActiveFilters] = useState({
    categoryFilter: "All",
    companyFilter: "All",
    colorFilter: "All",
  });

  //getting all unique category and company name from the data and stored in an new array
  const allFilters = (property) => {
    let allname = allproducts.map((curr) => {
      return curr[property];
    });
    return [...new Set(["All", ...allname])];
  };

  //getting all unique color name from the data and stored in an new array
  const allUniqueColor = (property) => {
    let allcolors = allproducts.map((curr) => {
      return curr[property];
    });
    return [...new Set(["All", ...allcolors.flat()])];
  };

  //calling above functions
  const uniquecategory = allFilters("category");
  const uniquecompany = allFilters("company");
  const uniquecolor = allUniqueColor("colors");

  //Loader
  if (isLoading) {
    return <Loader />;
  }

  //if there is Error
  if (isError) {
    return <Errorshow />;
  }

  return (
    <Wrapper>
      <div className="product_box1">
        <div className="search_box">
          <input
            type="text"
            name="text"
            onChange={updateFilter}
            value={filter.text}
            placeholder="SEARCH"
          />
        </div>

        <div className="category_box">
          {uniquecategory.map((curr,index) => {
            return (
              <>
                <button
                  key={index}
                  name="category"
                  value={curr}
                  onClick={(e) => {
                    updateFilter(e);
                    setActiveFilters({ ...activeFilter, categoryFilter: curr });
                  }}
                  className={
                    activeFilter.categoryFilter === curr ? "activecategory" : ""
                  }
                >
                  {curr}
                </button>
              </>
            );
          })}
        </div>

        <div className="company_box">
          <select
            name="company"
            onChange={(e) => {
              updateFilter(e);
              setActiveFilters({ companyFilter: curr });
            }}
          >
            {uniquecompany.map((curr,index) => {
              return (
                
                  <option key={index} value={curr}>{curr}</option>
               
              );
            })}
          </select>
        </div>
        <div className="color_box">
          <p>Colors </p>
          {uniquecolor.map((curr,index) => {
            return (
            
                <button
                  key={index}
                  style={{ backgroundColor: curr }}
                  name="color"
                  value={curr}
                  onClick={(e) => {
                    updateFilter(e);
                    setActiveFilters({ ...activeFilter, colorFilter: curr });
                  }}
                  className={
                    activeFilter.colorFilter === curr ? "activecolor" : ""
                  }
                >
                  {curr === "All" ? "All" : ""}
                </button>
              
            );
          })}
        </div>
        <div className="price_range">
          <input
            type="range"
            min={filter.minPrice}
            max={filter.maxPrice}
            value={filter.price}
            name="price"
            onChange={updateFilter}
          />
          <FormatPrice price={filter.price} />
        </div>

        <div className="clear_Filter">
          <button
            onClick={(e) => {
              clearFilter(e);
              setActiveFilters({
                categoryFilter: "All",
                companyFilter: "All",
                colorFilter: "All",
              });
            }}
          >
            Clear Filter
          </button>
        </div>
      </div>

      {/* Productbox 2 */}
      <div className="product_box2">
        <Sortbox />

        {/* this res_totaproduct is only for small size device */}
        <p className="res_totalproduct">
          Total Products : {filterproducts.length}
        </p>

        <div className="itemsbox">
          {grid_view ? (
            <Gridview products={filterproducts} />
          ) : (
            <Listview products={filterproducts} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  margin: auto;
  margin-top: 50px;
  .product_box1 {
    flex: 0 0 30%;
    // border: 2px solid;
    padding: 20px;

    .search_box {
      display: flex;
      justify-content: center;
      align-items: center;
      

      input {
        outline: none;
        width: 80%;
        font-size: 1em;
        border: 2px solid grey;
        text-indent: 5px;
        height: 35px;
        font-family: 'Poppins', sans-serif;
      }
    }

    .category_box {
      display: flex;
        flex-direction: column;
        align-items: flex-start
      }
      button {
        padding: 2px 10px;
        background: transparent;
        border: 0px;
        font-size: 1em;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
      }
      .activecategory {
        border-bottom: 2px solid rgb(72, 72, 177);
      }
    }

    .company_box {
      select {
        width: 40%;
        outline: none;
        font-weight: bold;
        font-size:1em;
        font-family: 'Poppins', sans-serif;
        height: 35px;
      }
    }

    .color_box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      p {
        font-weight: bold;
      }
      .activecolor {
        border: 4px solid rgb(72, 72, 177);
      }
      button {
        height: 25px;
        border: 0px;
        width: 25px;
        border-radius: 50%;
        margin: 0px 5px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8em;
      }
    }

    .clear_Filter button {
      border: 0px;
      background-color: red;
      padding: 8px 10px;
      color: white;
      outline: none;
      border-radius: 3px;
      font-family: 'Poppins', sans-serif;
      font-size:1em;
      &:hover {
        font-weight: bold;
      }
    }

    .category_box,
    .company_box,
    .price_range,
    .color_box,
    .clear_Filter {
      margin-top: 25px;
    }
  }

  // Products box 2

  .product_box2 {
    width: 100%;
  .res_totalproduct {
      display: none;
    }
  }

  //media query
  @media (max-width: ${({ theme }) => theme.responsive.Large}) {
    width: 100vw;
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.Medium}) {
    font-size: 14px;
    flex-direction: column;
    .product_box1 {
      .category_box {
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: center;
        align-items:center;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.Small}) {
    .product_box2 .res_totalproduct {
      display: block;
      text-align: center;
      font-weight: bold;
    }
  }
`;
export default Products;
