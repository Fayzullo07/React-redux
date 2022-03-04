const initialState = {
    news:[],
    newsLoadingStatus: 'sam',
    filters: []
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
                news: newCreatedNewsList
            }
        default:
            return state;
    }
}

export default reducer;