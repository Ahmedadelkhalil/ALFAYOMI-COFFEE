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
    useState("BURGER SANDWICHES");
  const [parent] = useAutoAnimate({ duration: 500 });
  const specificCatMenu = productsData.filter(
    (pro) => pro.category === activeCategoryMenu
  );

  return (
    <>
      <Helmet>
        <title>PRIMECUT | MENU</title>
      </Helmet>
      <div className="primecutMenu_container px-4 py-3">
        <div className="menu_header row">
          <div className="col-6 menu_header_left">
            <h1>simply great</h1>
            <h1>burgers</h1>
            <h1 className="d-flex justify-content-start align-items-center">
              <div className="and_section d-flex align-items-start">
                <span>and</span>
              </div>
              fries
            </h1>
          </div>
          <div className="col-6 menu_header_right">
            <h1>all burgers have</h1>
            <h1>a choice of: pickles / onion / </h1>
            <h1>chilli / fried onions /</h1>
            <h1>beef patty</h1>
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
                  setActiveCategoryMenu("BURGER SANDWICHES");
                }}
                className={`${
                  activeCategoryMenu === "BURGER SANDWICHES" ? "active" : ""
                }`}
              >
                burgers
              </button>
              <button
                onClick={() => {
                  setActiveCategoryMenu("CHICKEN SANDWICHES");
                }}
                className={`${
                  activeCategoryMenu === "CHICKEN SANDWICHES" ? "active" : ""
                }`}
              >
                chicken
              </button>
              <button
                onClick={() => {
                  setActiveCategoryMenu("BOWLS");
                }}
                className={`${activeCategoryMenu === "BOWLS" ? "active" : ""}`}
              >
                Bowls
              </button>
              <button
                onClick={() => {
                  setActiveCategoryMenu("SAUCES");
                }}
                className={`${activeCategoryMenu === "SAUCES" ? "active" : ""}`}
              >
                sauces
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
                      signature{" "}
                      {activeCategoryMenu === "BURGER SANDWICHES"
                        ? "burgers"
                        : activeCategoryMenu === "CHICKEN SANDWICHES"
                        ? "chicken"
                        : activeCategoryMenu === "BOWLS"
                        ? "Bowls"
                        : activeCategoryMenu === "SAUCES"
                        ? "sauces"
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
                    };
                    return (
                      <tr
                        className="d-flex justify-content-between align-items-center row"
                        key={product.id}
                      >
                        <td className="menu-pro-title col-8 col-md-4">
                          <NavLink
                            className="main-color-green"
                            to={`/productDetails/:${product.title?.replaceAll(
                              " ",
                              "-"
                            )}`}
                            state={{ from: { productInfo } }}
                          >
                            {product.title}
                          </NavLink>
                        </td>
                        <td className="menu-pro-desc col-4 d-none d-md-block">
                          <NavLink
                            className="main-color-green"
                            to={`/productDetails/:${product.title?.replaceAll(
                              " ",
                              "-"
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
