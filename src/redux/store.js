import { createStore } from "redux";
import { cartreducer } from "./reducer";

export const store = createStore(
    cartreducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );