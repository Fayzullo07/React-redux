import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import App from './components/App';
import news from './redux/reducers/news';
import filter from './redux/reducers/filter';
import './index.scss'

const stringMiddleware =() => (next) => (action) => {
  if(typeof action === "string"){
    return next({type: action});
  }
  return next(action);
}

const enhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const oldDispatch = store.dispatch;

  store.dispatch = (action) => {
    if(typeof action === 'string'){
      return oldDispatch({type: action})
    }
    return oldDispatch(action);
  }

  return store;
}
const store = createStore(combineReducers({news, filter}), compose(applyMiddleware(stringMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


