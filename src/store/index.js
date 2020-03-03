import { applyMiddleware, createStore,compose } from 'redux';
import rootReducer  from "../reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import bookSaga from '../sagas/bookSaga';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(  
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(bookSaga); 