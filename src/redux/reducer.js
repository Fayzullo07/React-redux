const initialState = {
    news:[],
    newsLoadingStatus: 'sam',
    filters: [],
    filterLoadingStatus: 'sam',
    activeFilter: 'all',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "NEWS_FETCHING":
            return{
                ...state,
                newsLoadingStatus:'loading'
            }
        case "NEWS_FETCHED":
            return{
                ...state,
                news: action.payload,
                newsLoadingStatus: 'sam'
            }
        case "NEWS_FETCHING_ERROR":
            return{
                ...state,
                newsLoadingStatus: 'error'
            }
        case "NEWS_CREATED":
            const newCreatedNewsList = [...state.news, action.payload];
            return{
                ...state,
                news: newCreatedNewsList,
            }
        case "FILTERS_FETCHING":
            return{
                ...state,
                filterLoadingStatus: "loading"
            }
        case "FILTERS_FETCHED":
            return{
                ...state,
                filters: action.payload,
                filterLoadingStatus: 'sam'
            }
        case "FILTERS_FETCHING_ERROR":
            return{
                ...state,
                filterLoadingStatus: 'error'
            }
        case "ACTIVE_FILTER_CHANCHED":
            return{
                ...state,
                activeFilter: action.payload,
            }
        case "NEWS_DELETED":
            const newNewList = state.news.filter(s => s.id !== action.payload);
            return{
                ...state,
                news: newNewList,
            }
        default:
            return state;
    }
}

export default reducer;