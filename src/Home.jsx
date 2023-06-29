
import FeatureProduct from "./Components/FeatureProduct";
import Herosection from "./Components/Herosection";
import Service from "./Components/Service";
const Home = () => {
  return (
    <>
      <Herosection data="Ecommerce" />
      <FeatureProduct />
      <Service />
    </>
  );
};

export default Home;
