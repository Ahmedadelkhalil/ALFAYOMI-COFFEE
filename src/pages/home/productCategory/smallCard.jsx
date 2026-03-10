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

const SmallCard = ({ smallProductCardInfo }) => {
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
      <div className="sm-box-logo-label d-flex justify-content-end">
        <img
          src="https://raw.githubusercontent.com/AhmedKhalilFED/Al-Fayomi/refs/heads/main/alFayomi-Header-Logo.png"
          alt="ALFAYOMI LOGO"
        />
      </div>
      <div>
        <div className="sm-box-pro-img text-center">
          <NavLink
            to={`/productDetails/:${smallProductCardInfo.name?.replaceAll(
              " ",
              "-",
            )}`}
            state={{ from: { smallProductCardInfo } }}
          >
            <img
              src={smallProductCardInfo.img}
              alt={smallProductCardInfo.name}
              className="w-100"
              loading="lazy"
            />
          </NavLink>
        </div>
        <h4
          className="sub-pic-title"
          style={{
            textWrap: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <NavLink
            to={`/productDetails/:${smallProductCardInfo.name?.replaceAll(
              " ",
              "-",
            )}`}
            state={{ from: { smallProductCardInfo } }}
            className="main-color-green text-uppercase"
          >
            {smallProductCardInfo.name}
          </NavLink>
        </h4>
        <p className="sub-pro-des">{smallProductCardInfo.description}</p>
        <div className="price-purchase-sec d-flex justify-content-between align-items-center">
          <div className="sub-pic-amount d-flex">
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
          <div className="d-flex justify-content-center align-items-center">
            <span className="sub-pic-price">{`${smallProductCardInfo.price} L.E`}</span>
            <button
              className="sub-pro-addToCart-btn"
              onClick={() => {
                dispatch(
                  addProductToCart({
                    id: smallProductCardInfo.id,
                    name: smallProductCardInfo.name,
                    quantity: amount,
                    price: smallProductCardInfo.price,
                    img: smallProductCardInfo.img,
                    productTotalCost: smallProductCardInfo.price * amount,
                    kcal: smallProductCardInfo.kcal,
                    fat: smallProductCardInfo.fat,
                    saturates: smallProductCardInfo.saturates,
                    sugars: smallProductCardInfo.sugars,
                    salt: smallProductCardInfo.salt,
                    description: smallProductCardInfo.description,
                    category: smallProductCardInfo.category,
                  }),
                );
                setAmount(0);
                if (amount > 0) {
                  setAlertMsg(
                    `${smallProductCardInfo.name} Added Successfully To Cart:)`,
                  );
                  handleAlert();
                } else {
                  setAlertMsg(`Choose Amount Please !!`);
                  handleAlert();
                }
              }}
            >
              <span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <Alert ref={alertParent} msg={alertMsg} />
    </>
  );
};

export default SmallCard;
