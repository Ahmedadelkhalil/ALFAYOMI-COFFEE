import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./productDetails.css";
import ErrorPage from "../error/errorPage";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// REDUX
import { addProductToCart } from "../../Redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// ALERT
import Alert from "../../global/alert/alert";
import { Toast } from "bootstrap";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper CSS Customization
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// Loader
import Loader from "../../global/loader/loader";

const ProductDetails = () => {
  const { state } = useLocation();
  const location = useLocation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  let [topHalfProInfo, setTopHalfProInfo] = useState(null);
  // Getting Our Products
  const productsStatus = useSelector((state) => state.products.status);
  const productsData = useSelector((state) => state.products.items);

  useEffect(() => {
    if (location.state) {
      setTopHalfProInfo(Object.values(location.state.from)[0]);
    } else {
      let regex = /:.*/gi;
      const proDetailsNameExtraction = location.pathname
        .match(regex)[0]
        .slice(1)
        .replaceAll("-", " ");
      setTopHalfProInfo(
        productsData.find((pro) => pro.title === proDetailsNameExtraction),
      );
    }
  }, [state, location, productsData]);

  // ALERT
  const [alertMsg, setAlertMsg] = useState("");
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toast = new Toast(alertHolder);
    toast.show();
  };

  return (
    <>
      {productsStatus === "Pending" && <Loader />}
      {productsStatus === "Failed" && (
        <div
          style={{
            width: "100dvw",
            height: "80dvh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Helmet>
            <title>Failed</title>
          </Helmet>
          <h3>Failed To Show Product Details</h3>
        </div>
      )}
      {topHalfProInfo === undefined && <ErrorPage />}
      {topHalfProInfo !== undefined && productsStatus === "Succeeded" && (
        <>
          <Helmet>
            <title>{`PRIMECUT | ${topHalfProInfo?.name?.toUpperCase()}`}</title>
          </Helmet>
          <div className="productDetails_container bg-warning row pb-5">
            <div className="productDetails_backToMenu_sec col-12 mb-5">
              <button>
                <NavLink className="d-flex align-items-center" to="/menu">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  back to menu
                </NavLink>
              </button>
            </div>
            <div className="productDetails_leftSide col-md-6 text-center text-md-end">
              <img src={topHalfProInfo?.img} alt="" />
            </div>
            <div className="productDetails_rightSide mt-4 mt-md-0 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center">
              <div>
                <h3 style={{ textTransform: "uppercase" }}>
                  {topHalfProInfo?.name}
                </h3>
                <div className="productDetails_ingredient_sec d-flex align-items-center">
                  <p className="d-flex align-items-center">
                    {`kcal:`} <span>{`${topHalfProInfo?.kcal}`}</span>
                  </p>
                  <p className="d-flex align-items-center">
                    {`fat:`} <span>{`${topHalfProInfo?.fat}g`}</span>
                  </p>
                  <p className="d-flex align-items-center">
                    {`saturates:`}{" "}
                    <span>{`${topHalfProInfo?.saturates}g`}</span>
                  </p>
                  <p className="d-flex align-items-center">
                    {`sugars:`} <span>{`${topHalfProInfo?.sugars}g`}</span>
                  </p>
                  <p className="d-flex align-items-center">
                    {`salt:`} <span>{`${topHalfProInfo?.salt}g`}</span>
                  </p>
                </div>
                <div className="productDetails_description_sec">
                  <p className="main-labels-color">
                    {topHalfProInfo?.description}
                  </p>
                </div>
                <div className="productDetails_quantity_sec d-flex align-items-center">
                  <span>quantity:</span>
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => {
                        if (quantity === 0) {
                          return false;
                        } else {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <span className="main-labels-color fw-semibold">
                      {quantity}
                    </span>
                    <button onClick={() => setQuantity(quantity + 1)}>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  </div>
                </div>
                <div className="productDetails_price_addCart_sec">
                  <span>{`$${topHalfProInfo?.price}`}</span>
                  <button
                    onClick={() => {
                      dispatch(
                        addProductToCart({
                          id: topHalfProInfo?.id,
                          name: topHalfProInfo?.name,
                          quantity: quantity,
                          price: topHalfProInfo?.price,
                          img: topHalfProInfo?.img,
                          productTotalCost: topHalfProInfo?.price * quantity,
                          kcal: topHalfProInfo?.kcal,
                          fat: topHalfProInfo?.fat,
                          saturates: topHalfProInfo?.saturates,
                          sugars: topHalfProInfo?.sugars,
                          salt: topHalfProInfo?.salt,
                          description: topHalfProInfo?.desc,
                          category: topHalfProInfo?.category,
                        }),
                      );
                      setQuantity(0);
                      if (quantity === 0) {
                        setAlertMsg(`Choose Amount Please !!`);
                        handleAlert();
                      } else {
                        setAlertMsg(
                          `${topHalfProInfo?.name} Added Successfult To Cart:)`,
                        );
                        handleAlert();
                      }
                    }}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="relatedProducts_MainTitleSec text-center mb-3 text-uppercase main-labels-color">
              <h2>you might like this choice</h2>
            </div>
            <div className="productDetails_relatedProducts_sec mt-5">
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
                {productsData
                  ?.filter((pro) => pro.category === topHalfProInfo?.category)
                  ?.filter((pro) => pro.id !== topHalfProInfo?.id)
                  ?.map((product) => {
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
                    };
                    return (
                      <SwiperSlide key={product.id}>
                        <div className="relatedProducts_slider">
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
                              className="w-100"
                            />
                          </NavLink>
                          <p className="fw-bold">
                            <NavLink
                              className="main-labels-color"
                              to={`/productDetails/:${product.title?.replaceAll(
                                " ",
                                "-",
                              )}`}
                              state={{ from: { productInfo } }}
                              style={{ textTransform: "uppercase" }}
                            >
                              {product.title}
                            </NavLink>
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
          <Alert ref={alertParent} msg={alertMsg} />
        </>
      )}
    </>
  );
};

export default ProductDetails;
