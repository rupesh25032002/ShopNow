import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Productreducer";
import axios from "axios";

const myContext = createContext(); //Create contextAPi

const API = "https://api.pujakaitem.com/api/products";

// Provider
const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleLoading: false,
    singleError: false,
    singleProduct: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //getting all products data from API
  const getProductdata = async (url) => {
    dispatch({ type: "PRODUCT_LOADING" });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      dispatch({ type: "SET_API_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "PRODUCT_ERROR" });
    }
  };

  //getting data for single product
  const getSingleproduct = async (url) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" });
    try {
      const singleproductdata = await axios.get(url);
      const data = await singleproductdata.data;
      dispatch({ type: "SET_SINGLEPRODUCT_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "SINGLE_PRODUCT_ERROR" });
      console.log(error);
    }
  };

  useEffect(() => {
    getProductdata(API);
  }, []);

  return (
    <myContext.Provider value={{ ...state, getSingleproduct }}>
      {children}
    </myContext.Provider>
  );
};

//Consumer
const useGetdata = () => {
  return useContext(myContext);
};

export { AppProvider, myContext, useGetdata };
