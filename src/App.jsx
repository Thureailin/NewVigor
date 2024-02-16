import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Mobile from "./Components/ProductPage/Mobile";
import Footer from "./Components/Layout/Footer";
import ServicePage from "./Pages/ServicePage";
import SolutionPage from "./Pages/SolutionPage";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/mobile" element={<Mobile />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/solution" element={<SolutionPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
