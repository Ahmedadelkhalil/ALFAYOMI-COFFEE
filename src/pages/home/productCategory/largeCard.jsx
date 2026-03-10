import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// REDUX
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../Redux/slices/cartSlice";
// ALERT
import Alert from "../../../global/alert/alert";
import { Toast } from "bootstrap";

const LargeCard = ({ largeProductCardInfo }) => {
  const [amount, setAmount] = useState(0);
  // REDUX
  const dispatch = useDispatch();
  // Handle Alert
  const [alertMsg, setAlertMsg] = useState("");
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toast = new Toast(alertHolder);
    toast.show();
  };

  return (
    <>
      <div className=" d-flex justify-content-end">
        <img
          src="https://raw.githubusercontent.com/AhmedKhalilFED/Al-Fayomi/refs/heads/main/alFayomi-Header-Logo.png"
          alt="ALFAYOMI LOGO"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
      <div>
        <div className="text-center large-img-of-left-side">
          <NavLink
            to={`/productDetails/:${largeProductCardInfo.name?.replaceAll(
              " ",
              "-",
            )}`}
            state={{ from: { largeProductCardInfo } }}
          >
            <img
              src={largeProductCardInfo.img}
              alt={largeProductCardInfo.name}
              style={{
                width: "256px",
                height: "256px",
              }}
              loading="lazy"
            />
          </NavLink>
        </div>
        <h4 className="main-pic-title">
          <NavLink
            to={`/productDetails/:${largeProductCardInfo.name?.replaceAll(
              " ",
              "-",
            )}`}
            state={{ from: { largeProductCardInfo } }}
            className="main-color-green text-uppercase"
          >
            {largeProductCardInfo.name}{" "}
            {`${largeProductCardInfo.lightroastavailable}`}
          </NavLink>
        </h4>
        {largeProductCardInfo.category === "DESSERTS" ? (
          <div className="pro-info d-flex justify-content-between align-items-center">
            <span className="fw-bold text-capitalize">{`fat - ${largeProductCardInfo?.fat}g`}</span>
            <span className="fw-bold text-capitalize">{`saturates - ${largeProductCardInfo.saturates}g`}</span>
            <span className="fw-bold text-capitalize">{`sugars - ${largeProductCardInfo.sugars}g`}</span>
            <span className="fw-bold text-capitalize">{`salt - ${largeProductCardInfo.salt}g`}</span>
          </div>
        ) : largeProductCardInfo.category === "CAN" ? (
          <div className="pro-info d-flex justify-content-between align-items-center">
            <span className="fw-bold text-capitalize">{`${largeProductCardInfo.weight} - ${largeProductCardInfo.price} L.E`}</span>
          </div>
        ) : largeProductCardInfo.category === "DRINKS" ? (
          largeProductCardInfo.sizeM || largeProductCardInfo.sizeL ? (
            <div className="pro-info d-flex justify-content-start align-items-center">
              <span className="fw-bold text-capitalize mx-2">{`Size Medium- ${largeProductCardInfo.sizeM} L.E`}</span>
              <span className="fw-bold text-capitalize">{`Size Large- ${largeProductCardInfo.sizeL} L.E`}</span>
            </div>
          ) : (
            <div className="pro-info d-flex justify-content-between align-items-center">
              <span className="fw-bold text-capitalize mx-2">{`Single - ${largeProductCardInfo.sizeS} L.E`}</span>
              <span className="fw-bold text-capitalize">{`Double - ${largeProductCardInfo.sizeD} L.E`}</span>
            </div>
          )
        ) : (
          <div className="pro-info d-flex justify-content-between align-items-center">
            <span className="fw-bold text-capitalize">{`1/8 KG - ${largeProductCardInfo.tomn} L.E`}</span>
            <span className="fw-bold text-capitalize">{`1/4 KG- ${largeProductCardInfo.rob3} L.E`}</span>
            <span className="fw-bold text-capitalize">{`1/2 KG- ${largeProductCardInfo.nos} L.E`}</span>
            <span className="fw-bold text-capitalize">{`1 KG- ${largeProductCardInfo.kilo} L.E`}</span>
          </div>
        )}

        <p className="large-pro-des">{largeProductCardInfo.description}</p>
        <div className="price-purchase-sec d-flex justify-content-between align-items-center">
          <div className="main-pic-amount">
            <button
              onClick={() => {
                if (amount === 0) {
                  return false;
                } else {
                  setAmount(amount - 1);
                }
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{amount}</span>
            <button onClick={() => setAmount(amount + 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="d-flex align-items-center">
            <span className="main-pic-price">{`${largeProductCardInfo.price} L.E`}</span>
            <button
              className="main-pro-addToCart-btn"
              onClick={() => {
                dispatch(
                  addProductToCart({
                    id: largeProductCardInfo.id,
                    name: largeProductCardInfo.name,
                    quantity: amount,
                    price: largeProductCardInfo.price,
                    img: largeProductCardInfo.img,
                    productTotalCost: largeProductCardInfo.price * amount,
                    kcal: largeProductCardInfo.kcal,
                    fat: largeProductCardInfo.fat,
                    saturates: largeProductCardInfo.saturates,
                    sugars: largeProductCardInfo.sugars,
                    salt: largeProductCardInfo.salt,
                    description: largeProductCardInfo.description,
                    category: largeProductCardInfo.category,
                  }),
                );
                setAmount(0);
                if (amount === 0) {
                  setAlertMsg(`Choose Amount Please !!`);
                  handleAlert();
                } else {
                  setAlertMsg(
                    `${largeProductCardInfo.name} Added Successfully To Cart:)`,
                  );
                  handleAlert();
                }
              }}
            >
              <span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span>add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <Alert ref={alertParent} msg={alertMsg} />
    </>
  );
};

export default LargeCard;
