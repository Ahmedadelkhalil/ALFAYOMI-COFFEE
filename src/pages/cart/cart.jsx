import { NavLink } from "react-router-dom";
import "./cart.css";
import { Helmet } from "react-helmet";
// ICONS
import Arrow from "../../assets/sources/Arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// REDUX
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  delProductFromCart,
  incrementQuantity,
  decrementQuantity,
  removeCartProducts,
} from "../../Redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalCost = useSelector((state) => state.cart.totalCost);
  return (
    <>
      <Helmet>
        <title>PRIMECUT | CART</title>
      </Helmet>
      <div className="cartPage_container px-4">
        <div className="cart_title pt-5">
          <h1>cart</h1>
        </div>
        <div className="cart-nav-sec d-flex justify-content-between mb-5">
          <div className="cart-nav-links">
            <button className="prev-page">
              <NavLink to="/">home</NavLink>
            </button>
            <span>/</span>
            <button className="curr-page">
              <NavLink to="/cart">cart</NavLink>
            </button>
          </div>
          <div className="cart-nav-menu">
            <button>
              <NavLink
                to="/menu"
                className="d-flex justify-content-center align-items-center"
              >
                <h4>{cartProducts.length === 0 ? `ADD` : `add more`}</h4>
                <img src={Arrow} alt="" />
              </NavLink>
            </button>
          </div>
        </div>
        {cartProducts.length === 0 ? (
          <div className="no-items-added-announcement">No Items Added Yet</div>
        ) : (
          <>
            <div className="table-scrolling pb-4">
              <table className="w-100">
                <thead>
                  <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>qty</th>
                    <th>&nbsp;</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((pro) => {
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
                        <td className="d-flex justify-content-start align-items-center">
                          <NavLink
                            to={`/productDetails/:${pro.name?.replaceAll(
                              " ",
                              "-"
                            )}`}
                            state={{ from: { productInfo } }}
                          >
                            <img src={pro.img} alt={pro.name} />
                          </NavLink>
                          <NavLink
                            to={`/productDetails/:${pro.name?.replaceAll(
                              " ",
                              "-"
                            )}`}
                            state={{ from: { productInfo } }}
                          >
                            <h4 className="text-uppercase">{pro.name}</h4>
                          </NavLink>
                        </td>
                        <td className="cartTable-price-sec">{`$${pro.price.toFixed(
                          2
                        )}`}</td>
                        <td className="cartTable-qnt-sec">
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
                        <td className="cartTable-rm-pro-btn">
                          <button
                            onClick={() =>
                              dispatch(delProductFromCart({ id: pro.id }))
                            }
                          >
                            remove
                          </button>
                        </td>
                        <td className="cartTable-tQnt-sec">
                          {`$${pro.productTotalCost.toFixed(2)}`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="d-flex align-items-center py-3">
                      <span className="dest-delivery main-color-green">
                        delivery
                      </span>
                      <span className="dest-title main-color-green text-uppercase">
                        Jeddah
                      </span>
                    </td>
                    <td colSpan={2} className="dest-info main-color-green">
                      from 5 to 8 km delivery
                    </td>
                    <td className="cartTable-rm-pro-btn">
                      <button>self pickup</button>
                    </td>
                    <td className="cartTable-tQnt-sec">$10.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="subtotalSection d-flex justify-content-end main-color-green mt-3">
              <span>{`Gross Total : $${Number(Number(totalCost) + 10).toFixed(
                2
              )}`}</span>
            </div>
            <div className="rmFun_checkPage_sec d-flex justify-content-end">
              <button
                onClick={() => dispatch(removeCartProducts())}
                className="cartTable-rm-cart-btn"
              >
                Remove all
              </button>
              <button>
                <NavLink to="/checkout">check out</NavLink>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
