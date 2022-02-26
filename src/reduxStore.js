import { createStore, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = {};
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
  store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));
} else {
  store = createStore(reducers);
}

export default store;