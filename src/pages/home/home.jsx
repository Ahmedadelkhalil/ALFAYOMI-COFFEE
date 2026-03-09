import { Helmet } from "react-helmet";
import Slider from "./slider/slider";
import "./css/home.css";
import BestDeal from "./bestDeal/bestDeal";
import ProductCategory from "./productCategory/productCategory";
import MonthSpecials from "./monthSpecials/monthSpecials";
import Vouchers from "./vouchers/vouchers";
// Swiper CSS Customization
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ALFAYOMI | HOME</title>
      </Helmet>
      <div className="home-container">
        <Slider />
        <div className="bestDeal-container mt-5 mb-3">
          <h1>see todays best deal</h1>
          <BestDeal />
        </div>
        <div className="py-2 px-4">
          <ProductCategory cat="TURKISH COFFEE" />
          <ProductCategory cat="DRINKS" />
          <ProductCategory cat="CAN" />
          <ProductCategory cat="DESSERTS" />
          <MonthSpecials />
        </div>
        <Vouchers />
      </div>
    </>
  );
};

export default Home;
