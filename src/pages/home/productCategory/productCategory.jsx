// REDUX
import { useSelector, shallowEqual } from "react-redux";
import { useMemo, memo } from "react";
// Small Card Component
import SmallCard from "./smallCard";
// Large Card Component
import LargeCard from "./largeCard";

const ProductCategory = memo(({ cat, bannerLabel }) => {
  // REDUX - Using shallowEqual to prevent unnecessary re-renders
  const productsStatus = useSelector((state) => state.products.status, shallowEqual);
  const productsData = useSelector((state) => state.products.items, shallowEqual);

  // Memoize filtered products to prevent recalculation on every render
  const productOfSameCategory = useMemo(() => {
    return productsData?.filter((product) => product.category === cat).slice(0, 5) || [];
  }, [productsData, cat]);

  // Memoize mapped product objects
  const mappedProducts = useMemo(() => {
    return productOfSameCategory.map((product) => ({
      name: product?.title,
      id: product?.id,
      img: product?.img,
      kcal: product?.kcal,
      fat: product?.fat,
      saturates: product?.saturates,
      sugars: product?.sugars,
      salt: product?.salt,
      tomn: product?.tomn,
      rob3: product?.rob3,
      nos: product?.nos,
      kilo: product?.kilo,
      weight: product?.weight,
      sizeM: product?.sizeM,
      sizeL: product?.sizeL,
      sizeS: product?.sizeS,
      sizeD: product?.sizeD,
      description: product?.desc,
      price: product?.price,
      category: product?.category,
      lra: product?.lra,
      type: product?.type,
    }));
  }, [productOfSameCategory]);

  const largeProductCard = mappedProducts[0] || {};
  const smallProductCard_01 = mappedProducts[1] || {};
  const smallProductCard_02 = mappedProducts[2] || {};
  const smallProductCard_03 = mappedProducts[3] || {};
  const smallProductCard_04 = mappedProducts[4] || {};

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
});

ProductCategory.displayName = 'ProductCategory';
export default ProductCategory;
