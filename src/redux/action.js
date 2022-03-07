import {createAction} from '@reduxjs/toolkit';

export const fetchNews = (request) => (dispatch) => {
    dispatch(newsFetching());
    request("http://localhost:3001/news")
        .then(data => dispatch(newsFetched(data)))
        .catch(() => dispatch(newsFetchingError()))
}
export const newsFetching = createAction("NEWS_FETCHING");
export const newsFetched = createAction("NEWS_FETCHED");
export const newsFetchingError = createAction("NEWS_FETCHING_ERROR");
export const newsCreated = createAction("NEWS_CREATED");
export const filtersFetching = createAction("FILTERS_FETCHING");
export const filtersFetched = createAction("FILTERS_FETCHED");
export const filtersFetchingError = createAction("FILTERS_FETCHING_ERROR"); 
export const activeFilterChanged = (filter) => (dispatch) => (setTimeout(() => (dispatch({type: "ACTIVE_FILTER_CHANCHED", payload: filter})), 500));
export const newsDeleted = createAction("NEWS_DELETED");
