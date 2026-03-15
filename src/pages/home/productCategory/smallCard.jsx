import { NavLink } from "react-router-dom";

const SmallCard = ({ smallProductCardInfo }) => {
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
          <NavLink
            to={`/productDetails/:${smallProductCardInfo.name?.replaceAll(
              " ",
              "-",
            )}`}
            state={{ from: { smallProductCardInfo } }}
            className="main-labels-color text-uppercase sub-pic-ex-label"
          >
            Explore
          </NavLink>

          <div className="d-flex justify-content-center align-items-center">
            <span className="sub-pic-price">{`${smallProductCardInfo.type === "coffee" || smallProductCardInfo.type === "beverageml" || smallProductCardInfo.type === "beveragesd" ? `FROM ${smallProductCardInfo.price}` : smallProductCardInfo.price} L.E`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
