import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Import Swiper components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BestDeal = () => {
  const navigate = useNavigate();
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

      {!isLoading && categoryData && categoryData.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          updateOnWindowResize={true}
          speed={1500}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {categoryData.map((product) => {
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
                <div
                  className="category-holder w-100"
                  role="button"
                  tabIndex={0}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(
                      `/productDetails/:${product.title?.replaceAll(" ", "-")}`,
                      {
                        state: { from: { productInfo } },
                      },
                    );
                  }}
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.stopPropagation();
                      navigate(
                        `/productDetails/:${product.title?.replaceAll(" ", "-")}`,
                        {
                          state: { from: { productInfo } },
                        },
                      );
                    }
                  }}
                >
                  <img src={product.img} alt={product.title} loading="eager" />
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
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default BestDeal;
