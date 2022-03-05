import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import App from './components/App';
import news from './redux/reducers/news';
import filter from './redux/reducers/filter';
import './index.scss'

const store = createStore(combineReducers({news, filter}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


