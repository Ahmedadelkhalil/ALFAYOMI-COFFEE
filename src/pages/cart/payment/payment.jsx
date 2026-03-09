import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./payment.css";
import { Helmet } from "react-helmet";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
// REDUX
import {
  delProductFromCart,
  incrementQuantity,
  decrementQuantity,
  removeCartProducts,
} from "../../../Redux/slices/cartSlice";
import { removePersonalInfo } from "../../../Redux/slices/customerInfo";
import {
  changeName,
  changeAddress,
  changePhone,
} from "../../../Redux/slices/customerInfo";
import { useDispatch, useSelector } from "react-redux";
// ALERT
import Alert from "../../../global/alert/alert";
import { Toast } from "bootstrap";

const Payment = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  // REDUX MANIPULATION
  const customerInfo = useSelector((state) => state.customerInfo);
  const products = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalCost);
  const [paymentopDone, setPaymentOpDone] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ALERT
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertholder = alertParent.current;
    const toast = new Toast(alertholder);
    toast.show();
  };
  const [redirectSeconds, setRedirectSeconds] = useState(5);
  const [startCount, setStartCount] = useState(false);
  if (startCount || products.length === 0) {
    const holder = setInterval(() => {
      setRedirectSeconds(redirectSeconds - 1);
      if (redirectSeconds === 0) {
        clearInterval(holder);
        navigate("/", { replace: true });
      }
    }, 1000);
  }
  useEffect(() => {
    if (products.length === 0) {
      setIsDisabled(true);
      handleAlert();
    }
  }, [products.length]);

  // PERSONAL INFO
  const [changingName, setChangingName] = useState(false);
  const [changingAddress, setChangingAddress] = useState(false);
  const [changingPhone, setChangingPhone] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedAddress, setEditedAddress] = useState("");
  const [editedPhone, setEditedPhone] = useState("");

  return (
    <>
      <Helmet>
        <title>PRIMECUT | PAYMENT</title>
      </Helmet>
      <div className="paymentPage-container px-4 py-5">
        <div className="payment-topNav-sec">
          <h1>payment</h1>
          <p>
            <button className="prevLink">
              <NavLink to="/cart">cart</NavLink>
            </button>{" "}
            /{" "}
            <button className="prevLink">
              <NavLink to="/checkout">check out</NavLink>
            </button>{" "}
            /{" "}
            <button className="currLink">
              <NavLink to="/payment">payment</NavLink>
            </button>
          </p>
        </div>
        <div className="d-flex row">
          <div className="payment-main-leftSide mt-5 col-md-6">
            <div className="payment-contactDetails mb-5">
              <h2>contact details</h2>
              <div className="customerInfo-block-sec">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <p>Name :</p>
                    <input
                      type="text"
                      className="text-capitalize"
                      readOnly={changingName ? false : true}
                      onChange={(e) => {
                        setEditedName(e.target.value);
                      }}
                      onBlur={() => {
                        setChangingName(false);
                        dispatch(changeName({ nameEdited: editedName }));
                      }}
                      onFocus={(e) => {
                        setEditedName(e.target.value);
                        setChangingName(true);
                      }}
                      value={changingName ? editedName : customerInfo.fullName}
                    />
                  </div>
                  <button onClick={() => setChangingName(true)}>
                    {changingName ? (
                      <span className="text-success">Edit Now</span>
                    ) : editedName ? (
                      <span className="text-success">Saved</span>
                    ) : (
                      <span className="text-danger">change</span>
                    )}
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <p>Address :</p>
                    <input
                      type="text"
                      className="text-capitalize"
                      readOnly={changingAddress ? false : true}
                      onChange={(e) => {
                        setEditedAddress(e.target.value);
                      }}
                      onBlur={() => {
                        setChangingAddress(false);
                        dispatch(
                          changeAddress({ addressEdited: editedAddress })
                        );
                      }}
                      onFocus={(e) => {
                        setEditedAddress(e.target.value);
                        setChangingAddress(true);
                      }}
                      value={
                        changingAddress ? editedAddress : customerInfo.address
                      }
                    />
                  </div>
                  <button onClick={() => setChangingAddress(true)}>
                    {changingAddress ? (
                      <span className="text-success">Edit Now</span>
                    ) : editedAddress ? (
                      <span className="text-success">Saved</span>
                    ) : (
                      <span className="text-danger">change</span>
                    )}
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <p>Phone :</p>
                    <input
                      type="text"
                      className="text-capitalize"
                      readOnly={changingPhone ? false : true}
                      onChange={(e) => {
                        setEditedPhone(e.target.value);
                      }}
                      onBlur={() => {
                        setChangingPhone(false);
                        dispatch(changePhone({ phoneEdited: editedPhone }));
                      }}
                      onFocus={(e) => {
                        setEditedPhone(e.target.value);
                        setChangingPhone(true);
                      }}
                      value={changingPhone ? editedPhone : customerInfo.phone}
                    />
                  </div>
                  <button onClick={() => setChangingPhone(true)}>
                    {changingPhone ? (
                      <span className="text-success">Edit Now</span>
                    ) : editedPhone ? (
                      <span className="text-success">Saved</span>
                    ) : (
                      <span className="text-danger">change</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="payment-method">
              <h2>payment method</h2>
              <form action="#">
                <div className="d-flex align-items-center">
                  <input type="radio" id="credit" name="paymentMethod" />
                  <label
                    htmlFor="credit"
                    className="d-flex align-items-center justify-content-between w-100"
                  >
                    <p>Credit card</p>
                    <p className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faCcVisa} />
                      <FontAwesomeIcon icon={faCcMastercard} />
                      <FontAwesomeIcon icon={faCcPaypal} />
                    </p>
                  </label>
                </div>
                <div>
                  <input type="radio" id="cash" name="paymentMethod" />
                  <label htmlFor="cash">
                    <p>Cash on delivery</p>
                  </label>
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center justify-content-between payment-btm-nav mt-4">
              <button
                onClick={() => {
                  if (isDisabled) {
                    navigate("/", { replace: true });
                  } else {
                    navigate("/checkout", { replace: true });
                  }
                }}
                disabled={paymentopDone ? true : false}
              >
                {isDisabled ? (
                  <NavLink>return to home</NavLink>
                ) : (
                  <NavLink>return to check out</NavLink>
                )}
              </button>
              <button
                onClick={() => {
                  handleAlert();
                  setStartCount(true);
                  setPaymentOpDone(true);
                  setIsDisabled(true);
                  dispatch(removeCartProducts());
                  dispatch(removePersonalInfo());
                }}
                disabled={isDisabled ? true : false}
              >
                <NavLink>to pay</NavLink>
              </button>
            </div>
          </div>
          <div className="payment-main-rightSide mt-5 px-0 px-md-5 col-md-6">
            <h2>your order</h2>
            <div className="payment-pro-table-holder overflow-auto">
              <div className="payment-pro-table-container">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th colSpan={2}>product</th>
                      <th colSpan={2}>qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((pro) => {
                      const productInfo = {
                        name: pro.name,
                        id: pro.id,
                        img: pro.img,
                        price: pro.price,
                        kcal: pro.kcal,
                        fat: pro.fat,
                        saturates: pro.saturates,
                        sugars: pro.sugars,
                        salt: pro.salt,
                        description: pro.desc,
                        category: pro.category,
                      };
                      return (
                        <tr key={pro.id}>
                          <td>
                            <NavLink
                              to={`/productDetails/:${pro.name?.replaceAll(
                                " ",
                                "-"
                              )}`}
                              state={{ from: { productInfo } }}
                            >
                              <img src={pro.img} alt={pro.name} />
                            </NavLink>
                          </td>
                          <td>
                            <NavLink
                              className="main-color-green"
                              to={`/productDetails/:${pro.name?.replaceAll(
                                " ",
                                "-"
                              )}`}
                              state={{ from: { productInfo } }}
                            >
                              {pro.name}
                            </NavLink>
                          </td>
                          <td className="payment-table-qty-sec">
                            <button
                              onClick={() =>
                                dispatch(decrementQuantity({ id: pro.id }))
                              }
                            >
                              <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                            <span className="main-color-green">
                              {pro.quantity}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(incrementQuantity({ id: pro.id }))
                              }
                            >
                              <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                dispatch(delProductFromCart({ id: pro.id }))
                              }
                            >
                              <FontAwesomeIcon icon={faX} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <h5 className="text-uppercase main-color-green">delivery</h5>
              <p className="text-capitalize main-color-green">
                from 5 to 8 km delivery
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <h5 className="text-uppercase payment-t-title">total :</h5>
              <p className="text-capitalize fw-bold main-color-green">
                {paymentopDone || products.length === 0
                  ? `$${Number(Number(total) + 0).toFixed(2)}`
                  : `$${Number(Number(total) + 10).toFixed(2)}`}
              </p>
            </div>
          </div>
        </div>
        <Alert
          ref={alertParent}
          msg={
            paymentopDone
              ? `Pay Done Successfully ${customerInfo.fullName} You'll Be Redirect Home in ${redirectSeconds}s`
              : `There Are No Products To Continue, You'll Be Redirect Home In ${redirectSeconds}s`
          }
        />
      </div>
    </>
  );
};
export default Payment;
