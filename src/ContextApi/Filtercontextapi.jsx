import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useGetdata } from "./ContextProduct";
import reducer from "../reducer/Filterproductreducer";

const Filtercontextapi = createContext(); //create contextApi

const initialState = {
  filterproducts: [],
  allproducts: [],
  grid_view: true,
  sort_value: "lowest",
  filter: {
    text: "",
    category: "",
    company: "",
    color: "",
    price: "",
    maxPrice: "",
    minPrice: "",
  },
};

// Provider
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useGetdata(); //getting all products from ContextProduct

  //setting gridview
  const setGridview = () => {
    return dispatch({ type: "SET_GRID_TRUE" });
  };

  //setting listview
  const setListview = () => {
    return dispatch({ type: "SET_LIST_TRUE" });
  };

  //setting sortvalue in the state
  const setSortValue = (e) => {
    let sortval = e.target.value;
    return dispatch({ type: "SET_SORT_VALUE", payload: sortval });
  };

  //to update filter
  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "UPDATE_FILTER", payload: { name, value } });
  };

  //to clear Filter
  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER", payload: products });
  };

  //to sort poducts and adding filters functionality
  useEffect(() => {
    dispatch({ type: "SORT_PRODUCT", payload: products });
    dispatch({ type: "SEARCH_FILTER" });
  }, [products, state.sort_value, state.filter]);

  //setting allproduct data to filterpoducts in state (initially)
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <Filtercontextapi.Provider
      value={{
        ...state,
        setGridview,
        setListview,
        setSortValue,
        updateFilter,
        clearFilter,
      }}
    >
      {children}
    </Filtercontextapi.Provider>
  );
};

// consumer
const useFilterdata = () => {
  return useContext(Filtercontextapi);
};

export { FilterProvider, useFilterdata };
