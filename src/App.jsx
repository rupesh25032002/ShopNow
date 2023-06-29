import Header from "./Components/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ErrorPage from "./ErrorPage";
import Addtocart from "./Components/Addtocart";
import Singleproduct from "./Singleproduct";
const App = () => {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/products" Component={Products} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/products/:id" Component={Singleproduct} />
          <Route exact path="/addtocart" Component={Addtocart} />
          <Route exact path="*" Component={ErrorPage} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
