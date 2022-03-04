export const newsFetching = () => ({type: "NEWS_FETCHING"});
export const newsFetched = (news) => ({type:"NEWS_FETCHED", payload: news});
export const newsFetchingError = () => ({type: "NEWS_FETCHING_ERROR"});
export const newsCreated = (news) => ({type: "NEWS_CREATED", payload: news});