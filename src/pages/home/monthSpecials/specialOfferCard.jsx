import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SpecialOfferCard = () => {
  const [monthSpecialData, setMonthSpecialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchMonthSpecialData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Ahmedadelkhalil/ALFAYOMI-COFFEE/refs/heads/master/src/assets/data/ourEvents.json",
        );
        const data = await response.json();
        setMonthSpecialData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchMonthSpecialData();
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "35dvh",
          }}
        >
          <h3>Loading Month Special Offer...</h3>
        </div>
      )}
      {!isLoading && !monthSpecialData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "35dvh",
          }}
        >
          <h3>Facing Problem To Show Month Special Offer</h3>
        </div>
      )}
      {!isLoading &&
        monthSpecialData &&
        monthSpecialData.map((monthSpecial) => (
          <div
            key={monthSpecial.title}
            className={`specialOffer_card_container row ${
              monthSpecial.cardDesign === "imgRight"
                ? "appropirate_card_structure_sm"
                : ""
            }`}
          >
            {monthSpecial.cardDesign === "imgLeft" ? (
              <>
                <div
                  className="col-sm-8 leftSideImg"
                  style={{
                    backgroundImage: `url(${monthSpecial.img})`,
                  }}
                ></div>
                <div className="col-sm-4 rightSideTxt">
                  <div className="specialOffer_card_title">
                    {monthSpecial.title}
                  </div>
                  <div className="specialOffer_card_paragraphs px-2">
                    <p>{monthSpecial.p_01}</p>
                    <p>{monthSpecial.p_02}</p>
                  </div>
                  <button>
                    <NavLink to="/menu">FIND OUT MORE</NavLink>
                  </button>
                </div>
              </>
            ) : monthSpecial.cardDesign === "imgRight" ? (
              <>
                <div className="col-sm-4 leftSideTxt">
                  <div className="specialOffer_card_title">
                    {monthSpecial.title}
                  </div>
                  <div className="specialOffer_card_paragraphs px-2">
                    <p>{monthSpecial.p_01}</p>
                    <p>{monthSpecial.p_02}</p>
                  </div>
                  <button>
                    <NavLink to="/menu">FIND OUT MORE</NavLink>
                  </button>
                </div>
                <div
                  className="col-sm-8 rightSideImg"
                  style={{
                    backgroundImage: `url(${monthSpecial.img})`,
                  }}
                ></div>
              </>
            ) : null}
          </div>
        ))}
    </>
  );
};

export default SpecialOfferCard;
