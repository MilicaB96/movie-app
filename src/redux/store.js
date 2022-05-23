import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
window.store = store;

// then run the saga

sagaMiddleware.run(sagas);

export default store;
