import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Import Swiper components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BestDeal = () => {
  const [categoryData, setCategoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Ahmedadelkhalil/ALFAYOMI-COFFEE/refs/heads/master/src/assets/data/categoryData.json",
        );
        const data = await response.json();
        setCategoryData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-4">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        cssMode={true}
        updateOnWindowResize={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1000}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="my-custom-swiper"
      >
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20dvh",
            }}
          >
            <h3>Loading Our Best Deal...</h3>
          </div>
        )}
        {!isLoading && !categoryData && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20dvh",
            }}
          >
            <h3>Facing Problem To Show Best Deal</h3>
          </div>
        )}
        {categoryData &&
          !isLoading &&
          categoryData.length > 0 &&
          categoryData?.map((product) => {
            const productInfo = {
              name: product.title,
              id: product.id,
              img: product.img,
              kcal: product.kcal,
              fat: product.fat,
              saturates: product.saturates,
              sugars: product.sugars,
              salt: product.salt,
              description: product.desc,
              price: product.price,
              category: product.category,
              tomn: product.tomn,
              rob3: product.rob3,
              nos: product.nos,
              kilo: product.kilo,
              weight: product.weight,
              sizeM: product.sizeM,
              sizeL: product.sizeL,
              sizeS: product.sizeS,
              sizeD: product.sizeD,
              lra: product.lra,
              type: product.type,
            };
            return (
              <SwiperSlide key={product.id}>
                <div className="category-holder w-100">
                  <NavLink
                    to={`/productDetails/:${product.title?.replaceAll(
                      " ",
                      "-",
                    )}`}
                    state={{ from: { productInfo } }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      loading="eager"
                    />
                  </NavLink>
                  <NavLink
                    to={`/productDetails/:${product.title?.replaceAll(
                      " ",
                      "-",
                    )}`}
                    state={{ from: { productInfo } }}
                  >
                    <p
                      style={{
                        width: "180px",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        textTransform: "uppercase",
                      }}
                    >
                      {product.title}
                    </p>
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default BestDeal;
