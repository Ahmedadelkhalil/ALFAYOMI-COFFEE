// REDUX
import { useSelector } from "react-redux";
// Small Card Component
import SmallCard from "./smallCard";
// Large Card Component
import LargeCard from "./largeCard";

const ProductCategory = ({ cat, bannerLabel }) => {
  let productOfSameCategory = [];
  // REDUX
  const productsStatus = useSelector((state) => state.products.status);
  const productsData = useSelector((state) => state.products.items);

  for (let i = 0; i < productsData?.length; i++) {
    if (productsData[i].category === cat) {
      productOfSameCategory.push(productsData[i]);
    }
  }
  productOfSameCategory.length = 5;
  const largeProductCard = {};
  const smallProductCard_01 = {};
  const smallProductCard_02 = {};
  const smallProductCard_03 = {};
  const smallProductCard_04 = {};
  const objectsName = [
    largeProductCard,
    smallProductCard_01,
    smallProductCard_02,
    smallProductCard_03,
    smallProductCard_04,
  ];
  for (let i = 0; i < productOfSameCategory.length; i++) {
    objectsName[i].name = productOfSameCategory[i]?.title;
    objectsName[i].id = productOfSameCategory[i]?.id;
    objectsName[i].img = productOfSameCategory[i]?.img;
    objectsName[i].kcal = productOfSameCategory[i]?.kcal;
    objectsName[i].fat = productOfSameCategory[i]?.fat;
    objectsName[i].saturates = productOfSameCategory[i]?.saturates;
    objectsName[i].sugars = productOfSameCategory[i]?.sugars;
    objectsName[i].salt = productOfSameCategory[i]?.salt;
    objectsName[i].tomn = productOfSameCategory[i]?.tomn;
    objectsName[i].rob3 = productOfSameCategory[i]?.rob3;
    objectsName[i].nos = productOfSameCategory[i]?.nos;
    objectsName[i].kilo = productOfSameCategory[i]?.kilo;
    objectsName[i].weight = productOfSameCategory[i]?.weight;
    objectsName[i].sizeM = productOfSameCategory[i]?.sizeM;
    objectsName[i].sizeL = productOfSameCategory[i]?.sizeL;
    objectsName[i].sizeS = productOfSameCategory[i]?.sizeS;
    objectsName[i].sizeD = productOfSameCategory[i]?.sizeD;
    objectsName[i].description = productOfSameCategory[i]?.desc;
    objectsName[i].price = productOfSameCategory[i]?.price;
    objectsName[i].category = productOfSameCategory[i]?.category;
    objectsName[i].lightroastavailable =
      productOfSameCategory[i]?.lightroastavailable;
  }

  const categoryTitle = `${bannerLabel}`;

  return (
    <>
      {productsStatus === "Pending" && (
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
          className="mb-5"
        >
          Loading...
        </h1>
      )}
      {productsStatus === "Failed" && (
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
          className="mb-5"
        >
          Failed To Show Products
        </h1>
      )}
      {productsStatus === "Succeeded" && (
        <section className="productSection mb-5">
          <h1 className="main-section-title text-center mb-4">
            {categoryTitle}
          </h1>
          <div className="productSection-container d-flex justify-content-center row">
            <div className="common-pic-container main-pic-container d-flex flex-column justify-content-center col-md-6 ">
              <LargeCard largeProductCardInfo={largeProductCard} />
            </div>
            <div className="col-md-6 small-cards-container">
              <div className="row cus-small-cards-inSpecificRatio gap-2 gap-md-0">
                <div className="cart-show-inSpecificRatio col-3 col-md-12 col-lg-6 d-flex justify-content-center mb-0 mb-md-2 card-sm-one">
                  <div className="common-pic-container sub-pic-container col-md-6 w-100 exception-xs-ratio">
                    <SmallCard smallProductCardInfo={smallProductCard_01} />
                  </div>
                </div>
                <div className="cart-show-inSpecificRatio col-3 col-md-12 col-lg-6 d-flex justify-content-center mb-0 mb-lg-2 card-sm-two">
                  <div className="common-pic-container sub-pic-container col-md-6 w-100 exception-xs-ratio">
                    <SmallCard smallProductCardInfo={smallProductCard_02} />
                  </div>
                </div>
                <div className="col-3 col-md-12 col-lg-6 d-none d-lg-flex justify-content-center card-sm-three">
                  <div className="common-pic-container sub-pic-container col-md-6 w-100">
                    <SmallCard smallProductCardInfo={smallProductCard_03} />
                  </div>
                </div>
                <div className="col-3 col-md-12 col-lg-6 d-none d-lg-flex justify-content-center card-sm-four">
                  <div className="common-pic-container sub-pic-container col-md-6 w-100">
                    <SmallCard smallProductCardInfo={smallProductCard_04} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default ProductCategory;
