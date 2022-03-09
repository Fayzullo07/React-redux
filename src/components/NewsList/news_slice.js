import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useHttp} from '../../hook/useHttp';

const initialState = {
    news:[],
    newsLoadingStatus: 'sam',
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async() => {
        const {request} = useHttp();
        return await request("http://localhost:3001/news")
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        // newsFetching: state => {state.newsLoadingStatus = "loading"},
        // newsFetched: (state, action) => {
        //     state.newsLoadingStatus = 'sam';
        //     state.news = action.payload;
        // },
        // newsFetchingError: state => {state.newsFetchingError = "error"},
        newsCreated: (state, action) => {state.news.push(action.payload)},
        newsDeleted: (state, action) => {state.news = state.news.filter(s => s.id !== action.payload)}
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNews.pending, state => {state.newsLoadingStatus = "loading"})
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.newsLoadingStatus = 'sam';
                state.news = action.payload;
            })
            .addCase(fetchNews.rejected, state => {state.newsFetchingError = "error"})
            .addDefaultCase(() => {})
    }

})

const {actions, reducer} = newsSlice;
export default reducer;
export const {newsFetching, newsFetched, newsFetchingError, newsCreated, newsDeleted} = actions;