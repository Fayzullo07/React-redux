import {createAction} from '@reduxjs/toolkit';

export const fetchNews = (request) => (dispatch) => {
    dispatch(newsFetching());
    request("http://localhost:3001/news")
        .then(data => dispatch(newsFetched(data)))
        .catch(() => dispatch(newsFetchingError()))
}
export const newsFetching = createAction("NEWS_FETCHING");
export const newsFetched = (news) => ({type:"NEWS_FETCHED", payload: news});
export const newsFetchingError = () => ({type: "NEWS_FETCHING_ERROR"});
export const newsCreated = (news) => ({type: "NEWS_CREATED", payload: news});
export const filtersFetching = () => ({type: "FILTERS_FETCHING"});
export const filtersFetched = (filters) => ({type: "FILTERS_FETCHED", payload: filters});
export const filtersFetchingError = () => ({type: "FILTERS_FETCHING_ERROR"}); 
export const activeFilterChanged = (filter) => (dispatch) => (setTimeout(() => (dispatch({type: "ACTIVE_FILTER_CHANCHED", payload: filter})), 500));
export const newsDeleted = (id) => ({type: "NEWS_DELETED", payload: id});
