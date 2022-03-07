// import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
// import ReduxThunk from 'redux-thunk';
import news from '../components/NewsList/news_slice';
import filter from './reducers/filter';
import { stringMiddleware } from '../middleware/stringMiddleware';

  
// export const store = createStore(combineReducers({news, filter}), compose(applyMiddleware(ReduxThunk, stringMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export const store = configureStore({
    reducer: {news, filter},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})