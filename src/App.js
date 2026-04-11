import ScrollToTopBtn from "./global/scrollToTopBtn/scrollToTopBtn";
import { HashRouter } from "react-router-dom";
// ROUTES
import RoutesPage from "./routes/routes";
// REDUX
import { Provider } from "react-redux";
import store from "./Redux/store";
// ERROR BOUNDARY
import ErrorBoundary from "./global/errorBoundary/ErrorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <HashRouter>
          <Provider store={store}>
            <RoutesPage />
          </Provider>
          <ScrollToTopBtn />
        </HashRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
