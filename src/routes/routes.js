import { useEffect, lazy, Suspense } from "react";
// REDUX
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/slices/productsSlice.js";
// Import Layout
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

// Import React Router Dom Components
import { Routes, Route, useLocation } from "react-router-dom";

// Import Loader
import Loader from "../global/loader/loader.jsx";

// Import Lazy Components To Optimize Performance
const Home = lazy(() => import("../pages/home/home.jsx"));
const Menu = lazy(() => import("../pages/menu/menu.jsx"));
const Faqs = lazy(() => import("../pages/faqs/faqs.jsx"));
const Contact = lazy(() => import("../pages/contact/contact.jsx"));
const ErrorPage = lazy(() => import("../pages/error/errorPage.jsx"));
const Cart = lazy(() => import("../pages/cart/cart.jsx"));
const Payment = lazy(() => import("../pages/cart/payment/payment.jsx"));
const Checkout = lazy(() => import("../pages/cart/checkout/checkout.jsx"));
const SignIn = lazy(() => import("../pages/registeration/sign_in/signIn.jsx"));
const Register = lazy(() =>
  import("../pages/registeration/register/register.jsx")
);
const ForgetPassword = lazy(() =>
  import("../pages/Forget Password/forgetPassword.jsx")
);
const ProductDetails = lazy(() =>
  import("../pages/product Details/productDetails.jsx")
);

const RoutesPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/productDetails/:name" element={<ProductDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default RoutesPage;
