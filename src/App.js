import ScrollToTopBtn from "./global/scrollToTopBtn/scrollToTopBtn";
import { HashRouter } from "react-router-dom";
// ROUTES
import RoutesPage from "./routes/routes";
// REDUX
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Provider store={store}>
          <RoutesPage />
        </Provider>
        <ScrollToTopBtn />
      </HashRouter>
    </div>
  );
};

export default App;
