import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Import Swiper components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  const [slidersData, setSlidersData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchSliderData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Ahmedadelkhalil/ALFAYOMI-COFFEE/refs/heads/master/src/assets/data/homeSliderData.json",
        );
        const data = await response.json();
        setSlidersData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchSliderData();
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "35dvh",
          }}
        >
          <h3>Loading Slider...</h3>
        </div>
      )}
      {!isLoading && !slidersData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "35dvh",
          }}
        >
          <h3>Facing Problem To Show Slider</h3>
        </div>
      )}
      {!isLoading && slidersData && (
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView="1"
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          cssMode={true}
        >
          {slidersData.map((slider, indx) => {
            if (indx % 2 === 0) {
              return (
                <SwiperSlide key={slider.id}>
                  <div className="home-slider-card row">
                    <div
                      className="slider-img-section col-6"
                      style={{ backgroundImage: `url(${slider.img})` }}
                    ></div>
                    <div className="col-6 slider-txt-section d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
                      <span>{slider.slogan}</span>
                      <h1>{slider.adsTitle}</h1>
                      <NavLink to={slider.btnLink}>
                        <button>{slider.btnTitle}</button>
                      </NavLink>
                    </div>
                  </div>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide key={slider.id}>
                  <div className="home-slider-card row">
                    <div className="col-6 slider-txt-section d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
                      <span>{slider.slogan}</span>
                      <h1>{slider.adsTitle}</h1>
                      <NavLink to={slider.btnLink}>
                        <button>{slider.btnTitle}</button>
                      </NavLink>
                    </div>
                    <div
                      className="slider-img-section col-6"
                      style={{ backgroundImage: `url(${slider.img})` }}
                    ></div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
