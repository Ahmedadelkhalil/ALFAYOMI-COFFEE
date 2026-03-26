import { Link } from "react-router-dom";
import "./css/faqs.css";
import { Helmet } from "react-helmet";

const Faqs = () => {
  return (
    <>
      <Helmet>
        <title>ALFAYOMI | FAQS</title>
      </Helmet>
      <div className="faqs_container row">
        <div className="col-12 faqs-top-main-title">
          we Crafting unforgettable Coffee experiences.
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            ALFAYOMI COFFEE
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">THE BEGINNING ?</p>
              <p className="answer">
                Since 1938 Alfayomi Coffee has been in coffee industry with it's
                unique taste and strong aroma.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">WHY US ?</p>
              <p className="answer">
                The finest kinds of coffee with it's international fame and
                quality mixed in a well-chosen blend. then roasted and grinded
                with care just to provide our customers with a rich cup of
                coffee that suits coffee lovers with reach taste everywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            OUR VISION
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">WHAT IS ALFAYOMI COFFEE VISION ?</p>
              <p className="answer">
                To be the most known and recommended coffee brand in Egypt and
                the middle east.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            OUR MISSION
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">WHAT IS ALFAYOMI COFFEE MISSION ?</p>
              <p className="answer">
                To provide our customers with the highest quality coffee and the
                best possible customer experience .
              </p>
              <p className="answer">
                To be a leader in the coffee industry and to set the standard
                for excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">OFFERS</div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">DO YOU HAVE EID OFFERS ?</p>
              <p className="answer">
                Sure check out our Mother's Day Box offer from{" "}
                <Link
                  to="https://www.instagram.com/p/DWEH1lZDVtf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  Here
                </Link>
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">WHAT ABOUT FRENCH COFFEE OFFERS ?</p>
              <p className="answer">
                You can choose 3 cans of our french coffee with flavors from
                your choice and you will pay 450 L.E instead of 525 L.E
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            OUR BRANCHES
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">Tanta Branches</p>
              <p className="answer">
                - Saeed square with Hassan Radwan street.
              </p>
              <p className="answer">- Elnady street front of Tanta Club.</p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">Elmahalla Elkobra Branches</p>
              <p className="answer">- 43 Reda Hafez street.</p>
              <p className="answer">
                - Elsbaa banat next to Ghazl El Mahallah.
              </p>
              <p className="answer">
                - Omar Ebn Elkhatab street from Shokry El Koatly.
              </p>
              <p className="answer">- Saad Zaghlol street.</p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">Mansoura Branches</p>
              <p className="answer">- Front of Mansoura Law college.</p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">Kafr El sheikh Branches</p>
              <p className="answer">- El Nabawy El Mohandes street.</p>
              <p className="answer">
                - Elmohafza street next to Sann'a Garden.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            GIVING FEEDBACK
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">
                HOW CAN I GIVE YOU FEEDBACK ON MY VISIT?
              </p>
              <p className="answer">
                We’d love to hear your feedback. Please go to any of our stores
                and fill out the feedback document form there.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            NEED MORE INFO?
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">HOW CAN I GET IN CONTACT WITH YOU?</p>
              <p className="answer">
                We've hopefully answered your query in the FAQs above, but if
                not please go to our contact page and fill in an enquiry there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faqs;
