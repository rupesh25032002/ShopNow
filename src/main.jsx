import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Theme from "./Components/Theme";
import GlobalStyle from "./Components/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./ContextApi/ContextProduct";
import { FilterProvider } from "./ContextApi/Filtercontextapi";
import { CartProvider } from "./ContextApi/Cartcontextapi";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById("root")).render(
  // Authenticationc
  <Auth0Provider
    domain="dev-u367rc0ggte6cvwn.us.auth0.com"
    clientId="kydriCwnLcbZQKSwIngMidMLWDKKJrbO"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </AppProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Auth0Provider>
);
