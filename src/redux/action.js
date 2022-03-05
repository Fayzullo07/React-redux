export const newsFetching = () => ({type: "NEWS_FETCHING"});
export const newsFetched = (news) => ({type:"NEWS_FETCHED", payload: news});
export const newsFetchingError = () => ({type: "NEWS_FETCHING_ERROR"});
export const newsCreated = (news) => ({type: "NEWS_CREATED", payload: news});
export const filtersFetching = () => ({type: "FILTERS_FETCHING"});
export const filtersFetched = (filters) => ({type: "FILTERS_FETCHED", payload: filters});
export const filtersFetchingError = () => ({type: "FILTERS_FETCHING_ERROR"}); 
export const activeFilterChanged = (filter) => ({type: "ACTIVE_FILTER_CHANCHED", payload: filter});
export const newsDeleted = (id) => ({type: "NEWS_DELETED", payload: id});
