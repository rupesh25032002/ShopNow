const Cartreducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      const { id, name, color, price, stock, numberofproduct } = action.payload;

      //Updating the existing cart item
      
      //getting the index of item to update that
      const updateIndex = state.cart.findIndex(
        (curr) => curr.id === id + color
      );

      if (updateIndex !== -1) {
        const updatedcart = state.cart.map((curr, index) => {
          if (index === updateIndex) {
            if (curr.qty + numberofproduct <= stock) {
              let newqty = curr.qty + numberofproduct;
              return {
                ...curr,
                qty: newqty,
              };
            } else {
              return {
                ...curr,
                qty: stock,
              };
            }
          } else return curr;
        });
        return {
          ...state,
          cart: updatedcart,
        };
      }

      //adding new item in the cart
      else {
        const data = {
          id: id + color,
          item: name,
          price,
          color,
          stock,
          qty: numberofproduct,
          subtotal: numberofproduct * price,
        };

        return {
          ...state,
          cart: [...state.cart, data],
        };
      }

    //delete  the item from the cart
    case "REMOVE_CART":
      const { cart } = state;
      const removeid = action.payload;
      const updatecart = cart.filter((curr) => {
        console.log(curr.id + curr.color, removeid);
        return curr.id !== removeid;
      });

      return {
        ...state,
        cart: updatecart,
      };

    //clearing all item from the cart
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    //setting total price and total items present in the cart
    case "SET_TOTAL_PRICE_AND_ITEM":
      const { total_price, total_item } = state.cart.reduce(
        (accum, curr) => {
          accum.total_price += curr.subtotal;
          accum.total_item += curr.qty;
          return accum;
        },
        {
          total_price: 0,
          total_item: 0,
        }
      );
     
      return {
        ...state,
        total_item,
        total_price,
      };
  }
};

export default Cartreducer;
