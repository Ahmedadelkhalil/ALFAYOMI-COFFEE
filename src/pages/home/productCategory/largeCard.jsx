import { NavLink } from "react-router-dom";

const LargeCard = ({ largeProductCardInfo }) => {
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
            className="main-labels-color text-uppercase"
          >
            {largeProductCardInfo.name}
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
            <NavLink
              to={`/productDetails/:${largeProductCardInfo.name?.replaceAll(
                " ",
                "-",
              )}`}
              state={{ from: { largeProductCardInfo } }}
              className="main-labels-color text-uppercase main-pic-ex-label"
            >
              CLICK TO Explore
            </NavLink>
          </div>
          <div className="d-flex align-items-center">
            <span className="main-pic-price">{`${largeProductCardInfo.type === "coffee" || largeProductCardInfo.type === "beverageml" || largeProductCardInfo.type === "beveragesd" ? `FROM ${largeProductCardInfo.price}` : largeProductCardInfo.price} L.E`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeCard;
