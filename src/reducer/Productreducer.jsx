const Productreducer = (state, action) => {
  switch (action.type) {
    //product loading true
    case "PRODUCT_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    //setting data to state
    case "SET_API_DATA":
      const featuredata = action.payload.filter((currele) => {
        return currele.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featuredata,
      };

    //setting isError true
    case "PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //set loader for single products
    case "SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        singleLoading: true,
      };

    //setting single product data
    case "SET_SINGLEPRODUCT_DATA":
      return {
        ...state,
        singleLoading: false,
        singleProduct: action.payload,
      };

    //setting singleproduct error
    case "SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        singleLoading: false,
        singleError: true,
      };
  }
};
export default Productreducer;
