import "./css/faqs.css";
import { Helmet } from "react-helmet";

const Faqs = () => {
  return (
    <>
      <Helmet>
        <title>PRIMECUT | FAQS</title>
      </Helmet>
      <div className="faqs_container row">
        <div className="col-12 faqs-top-main-title">
          we Crafting unforgettable dining experiences.
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            BOOKINGS
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">HOW DO I BOOK?</p>
              <p className="answer">
                Group of up to 20 can book online and will be automatically
                confirmed if we have the space. If you can’t see any space it is
                likely that we are fully booked, however we may be able to take
                walk-ins so please visit us. Bookings are open 3 months in
                advance.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">BOOKING TERMS</p>
              <p className="answer">
                To secure a booking on busy nights and large groups we do ask
                for card details in advance of the reservation. At the time of
                making the booking, your card will be authenticated for the
                amount of £10 per person. We do not charge your card to book, we
                simply take the information in case of a no show and/or failure
                to cancel before our 48h cancellation period.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">
                IF I NEED TO CANCEL A BOOKING WILL I GET CHARGED?
              </p>
              <p className="answer">
                If your booking is for 1-5 you can cancel online and you will
                not be charged. If your booking with us is for 6 diners or
                larger our cancellation period is 48hrs and we reserve the right
                to charge the cancellation fee if the booking is cancelled
                within this time period. This may change over holiday or special
                occasion periods such as Christmas or boozy brunch bookings - so
                please make sure you check the individual terms and conditions
                when booking.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            TAKE AWAY AND DELIVERY
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">DO YOU OFFER TAKEAWAY?</p>
              <p className="answer">
                We offer delivery though Deliveroo. You are welcome to pop in to
                any of our sites and order for collection
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">I CAN'T FIND DIRTY BONES ON DELIVEROO</p>
              <p className="answer">
                If we’re really busy we may have stopped taking orders for a
                while, so the wait for food isn't too long, but we’ll be back on
                as soon as possible.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">I HAVE AN ISSUE WITH MY ORDER</p>
              <p className="answer">
                Please raise a case with Deliveroo if you have any problems with
                your order.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            DIETARY
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">ARE YOU HALAL?</p>
              <p className="answer">
                All of our beef and chicken products are halal. Due to customer
                demand we have introduced a non-halal product in our baby back
                ribs.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">DO YOU HAVE A VEGAN MENU?</p>
              <p className="answer">
                Our vegan options are marked with VE next to the dish.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">ALLERGIES</p>
              <p className="answer">
                Please do let us know in advance if you or any of your crew has
                any special dietary requirements and we will try our best to
                accommodate those. Please note; we can’t guarantee any of our
                products are suitable for those with allergies due to a high
                risk of cross-contamination. Check out ourallergen guide for
                more information.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">OFFERS</div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">
                DO YOU HAVE A HAPPY HOUR? WHAT TIME IS YOUR HAPPY HOUR?
              </p>
              <p className="answer">
                Our Happy Hour times vary by location. Check out each venue’s
                individual page on the website for full details of Happy Hour
                times.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">WHEN DO YOU OFFER YOUR BTMLS BRUNCH?</p>
              <p className="answer">
                Our brunch menu for our delicious & boozy weekends is available
                at our Soho and Oxford restaurants on Saturday and Sunday 11am –
                4pm.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">
                HOW DO I FIND OUT MORE ABOUT YOUR OFFERS?
              </p>
              <p className="answer">
                Head to our menu page, sign up to our newsletter, check our out
                blog or follow us on social media.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-md-6 faq_block_leftSide mb-4 mb-md-0">
            AFTER YOUR VISIT
          </div>
          <div className="col-md-6">
            <div className="faq_block_rightSide">
              <p className="question">I HAVE LOST SOME OF MY PROPERTY</p>
              <p className="answer">
                If you have an item of lost property you would like to log,
                please fill in the Contact Us form by clicking here, choosing
                'Lost Property' under the 'Reason for Contacting Us' and we'll
                get back to you as soon as possible.
              </p>
            </div>
            <div className="faq_block_rightSide">
              <p className="question">
                HOW CAN I GIVE YOU FEEDBACK ON MY VISIT?
              </p>
              <p className="answer">
                We’d love to hear your feedback. Please go to our contact page
                and fill out the form.
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
