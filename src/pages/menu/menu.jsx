import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/menu.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Helmet } from "react-helmet";
// REDUX
import { useSelector } from "react-redux";

const Menu = () => {
  const productsStatus = useSelector((state) => state.products.status);
  const productsData = useSelector((state) => state.products.items);
  const [activeCategoryMenu, setActiveCategoryMenu] =
    useState("TURKISH COFFEE");
  const [parent] = useAutoAnimate({ duration: 500 });
  const specificCatMenu = productsData.filter(
    (pro) => pro.category === activeCategoryMenu,
  );

  return (
    <>
      <Helmet>
        <title>ALFAYOMI | MENU</title>
      </Helmet>
      <div className="alfayomiMenu_container px-4 py-3">
        <div className="menu_header row">
          <div className="col-6 menu_header_left">
            <img
              src="https://raw.githubusercontent.com/Ahmedadelkhalil/ALFAYOMI-COFFEE/refs/heads/master/src/assets/logo/footer-logo.png"
              alt="ALFAYOMI LOGO"
            />
          </div>
          <div
            className="col-6 menu_header_right"
            style={{
              fontFamily: "Bakbak One",
              fontWeight: "400",
            }}
          >
            <h1 style={{ letterSpacing: "2px", fontSize: "35px" }}>
              since 1938
            </h1>
            <h1 style={{ letterSpacing: "2px", fontSize: "35px" }}>
              alfayomi coffee
            </h1>
            <h1 style={{ letterSpacing: "2px", fontSize: "35px" }}>
              has been in
            </h1>
            <h1 style={{ letterSpacing: "2px", fontSize: "35px" }}>
              coffee industry
            </h1>
          </div>
        </div>
        {productsStatus === "Pending" && (
          <>
            <h1
              style={{
                minHeight: "40dvh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px dashed #21372b",
                backgroundColor: "#dcd5cf",
                borderRadius: "10px",
              }}
              className="my-5"
            >
              Loading ...
            </h1>
          </>
        )}
        {productsStatus === "Failed" && (
          <>
            <h1
              style={{
                minHeight: "40dvh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px dashed #21372b",
                backgroundColor: "#dcd5cf",
                borderRadius: "10px",
              }}
              className="my-5"
            >
              Failed To Show Menu
            </h1>
          </>
        )}
        {productsStatus === "Succeeded" && (
          <>
            <div className="mt-4 mt-md-5 d-flex justify-content-center align-items-center category-btns">
              <button
                onClick={() => {
                  setActiveCategoryMenu("TURKISH COFFEE");
                }}
                className={`${
                  activeCategoryMenu === "TURKISH COFFEE" ? "active" : ""
                }`}
              >
                Turkish
              </button>
              <button
                onClick={() => {
                  setActiveCategoryMenu("SINGLE ORIGIN COFFEE");
                }}
                className={`${
                  activeCategoryMenu === "SINGLE ORIGIN COFFEE" ? "active" : ""
                }`}
              >
                SINGLE ORIGIN
              </button>
              <button
                onClick={() => {
                  setActiveCategoryMenu("CAN");
                }}
                className={`${activeCategoryMenu === "CAN" ? "active" : ""}`}
              >
                CAN
              </button>
              <button
                onClick={() => {
                  setActiveCategoryMenu("COFFEE TOOLS");
                }}
                className={`${activeCategoryMenu === "COFFEE TOOLS" ? "active" : ""}`}
              >
                TOOLS
              </button>
              <button
                onClick={() => {
                  setActiveCategoryMenu("DRINKS");
                }}
                className={`${activeCategoryMenu === "DRINKS" ? "active" : ""}`}
              >
                drinks
              </button>
              <button
                onClick={() => {
                  setActiveCategoryMenu("DESSERTS");
                }}
                className={`${
                  activeCategoryMenu === "DESSERTS" ? "active" : ""
                }`}
              >
                dessert
              </button>
            </div>
            <div className="menu_body row mt-4 mt-md-5">
              <table className="col text-uppercase">
                <tbody ref={parent}>
                  <tr className="d-flex justify-content-between align-items-center">
                    <th className="signature-type">
                      {activeCategoryMenu === "TURKISH COFFEE"
                        ? "TURKISH COFFEE"
                        : activeCategoryMenu === "SINGLE ORIGIN COFFEE"
                          ? "SINGLE ORIGIN COFFEE"
                          : activeCategoryMenu === "CAN"
                            ? "ALFAYOMI CAN"
                            : activeCategoryMenu === "COFFEE TOOLS"
                              ? "COFFEE TOOLS"
                              : activeCategoryMenu === "DRINKS"
                                ? "drinks"
                                : activeCategoryMenu === "DESSERTS"
                                  ? "dessert"
                                  : null}
                    </th>
                    <th>
                      <div className="d-flex flex-column">
                        <span>price</span>
                        <span>/ cal</span>
                      </div>
                    </th>
                  </tr>
                  {specificCatMenu.map((product) => {
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
                      sizeM: product.sizeM,
                      sizeL: product.sizeL,
                      sizeS: product.sizeS,
                      sizeD: product.sizeD,
                      lra: product.lra,
                      type: product.type,
                    };
                    return (
                      <tr
                        className="d-flex justify-content-between align-items-center row"
                        key={product.id}
                      >
                        <td className="menu-pro-title col-8 col-md-4">
                          <NavLink
                            className="main-labels-color"
                            to={`/productDetails/:${product.title?.replaceAll(
                              " ",
                              "-",
                            )}`}
                            state={{ from: { productInfo } }}
                          >
                            {product.title}
                          </NavLink>
                        </td>
                        <td className="menu-pro-desc col-4 d-none d-md-block">
                          <NavLink
                            className="main-labels-color"
                            to={`/productDetails/:${product.title?.replaceAll(
                              " ",
                              "-",
                            )}`}
                            state={{ from: { productInfo } }}
                          >
                            {product.desc}
                          </NavLink>
                        </td>
                        <td className="d-flex flex-column menu-pro-price-cal col-4 col-md-4">
                          <span className="text-end">{`$${product.price}`}</span>
                          <span className="text-end">{`${product.kcal} cal`}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
