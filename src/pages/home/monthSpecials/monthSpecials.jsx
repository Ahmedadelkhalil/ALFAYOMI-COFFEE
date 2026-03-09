import "./monthSpecials.css";
import SpecialOfferCard from "./specialOfferCard";

const MonthSpecials = () => {
  const sentence = "AL FAYOMI COFFEE EVENTS";
  return (
    <div className="monthSpecial_container">
      <h1 className="monthSpecial_title text-center">{sentence}</h1>
      <SpecialOfferCard />
    </div>
  );
};

export default MonthSpecials;
