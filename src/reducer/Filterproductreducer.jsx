const Filterproductreducer = (state, action) => {
  let maxVal;
  let minVal;
  switch (action.type) {
    //setting all product data to filterproducts and allproducts in the state
    case "FILTER_PRODUCTS":
      //min and max price of product
      let priceArr = action.payload.map((curr) => curr["price"]);
      maxVal = Math.max(...priceArr);
      minVal = Math.min(...priceArr);
      return {
        ...state,
        filterproducts: action.payload,
        allproducts: action.payload,
        filter: {
          ...state.filter,
          price: maxVal,
          maxPrice: maxVal,
          minPrice: minVal,
        },
      };

    //setting gridview
    case "SET_GRID_TRUE":
      return {
        ...state,
        grid_view: true,
      };
    //setting Listview
    case "SET_LIST_TRUE":
      return {
        ...state,
        grid_view: false,
      };
    //set sort_value on that basis poducts get sort
    case "SET_SORT_VALUE":
      return {
        ...state,
        sort_value: action.payload,
      };

    //sorting the poducts with help of sort_value
    case "SORT_PRODUCT":
      const { sort_value } = state;
      let productsval = action.payload;
      let newsortedval;
      newsortedval = productsval.sort((a, b) => {
        if (sort_value === "lowest") return a.price - b.price;
        if (sort_value === "highest") return b.price - a.price;
        if (sort_value === "a-z") return a.name.localeCompare(b.name);
        if (sort_value === "z-a") return b.name.localeCompare(a.name);
      });
      return {
        ...state,
        filterproducts: newsortedval,
      };

    //updating the filters property in the state
    case "UPDATE_FILTER":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    //all filters functionality
    case "SEARCH_FILTER":
      const { allproducts } = state;
      const { text, category, company, color, price } = state.filter;
      let allfilterpoduct = [...allproducts];

      //search functionality
      if (text) {
        console.log("text");
        allfilterpoduct = allfilterpoduct.filter((curr) => {
          return curr.name.toLowerCase().includes(text);
        });
      }
      //categorywise filters

      if (category !== "All" && category !== "") {
        allfilterpoduct = allfilterpoduct.filter((curr) => {
          return curr.category === category;
        });
      }
      //companywise filters
      if (company !== "All" && company !== "") {
        console.log("com");
        allfilterpoduct = allfilterpoduct.filter((curr) => {
          return curr.company === company;
        });
      }

      //colorwise filters
      if (color !== "All" && color !== "") {
        console.log("com");
        allfilterpoduct = allfilterpoduct.filter((curr) => {
          return curr.colors.includes(color);
        });
      }

      //pricewise filters
      if (price !== "") {
        allfilterpoduct = allfilterpoduct.filter((curr) => {
          return curr.price <= price;
        });
      }
      return {
        ...state,
        filterproducts: allfilterpoduct,
      };

    //clearing the filters
    case "CLEAR_FILTER":
      const newpriceArr = action.payload.map((curr) => curr["price"]);
      maxVal = Math.max(...newpriceArr);
      minVal = Math.min(...newpriceArr);
      return {
        ...state,
        filter: {
          ...state.filter,
          text: "",
          category: "",
          company: "",
          color: "",
          price: maxVal,
          maxPrice: maxVal,
          minPrice: minVal,
        },
      };

    default:
      return state;
  }
};

export default Filterproductreducer;
