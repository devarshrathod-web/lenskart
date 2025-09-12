import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav1 from "./Component/Nav1";
import Nav2 from "./Component/Nav2";
import Bannner from "./Component/Bannner";
import Product from "./Component/Product";
import Footer from "./Component/Footer";
import Section1 from "./Component/Section1";
import Banner2 from "./Component/Banner2";
import Carts from "./Component/Carts";


function App() {
  return (
   <>
      <Nav1 />
      <Nav2 />
      <Bannner />
      <Product />
      <Section1 />
      <Banner2 />
      <Carts />
      <Footer />
   </>
  );
}

export default App;
