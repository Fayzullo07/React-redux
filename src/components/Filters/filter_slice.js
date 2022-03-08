import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filters: [],
    filterLoadingStatus: 'sam',
    activeFilter: 'all',
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers:{
        filtersFetching: state => {state.filterLoadingStatus = "loading"},
        filtersFetched: (state, action) => {
            state.filters = action.payload;
            state.filterLoadingStatus = "sam";

        },
        filtersFetchingError: state => {state.filterLoadingStatus = "error"},
        activeFilterChanged: (state, action) => {state.activeFilter = action.payload}
        
    }
    
})

const {actions, reducer} = filtersSlice;
export default reducer;
export const {filtersFetching, filtersFetched, filtersFetchingError, activeFilterChanged} = actions;

// const filter = (state = initialState, action) => {
//     switch(action.type){
//         case "FILTERS_FETCHING":
//             return{
//                 ...state,
//                 filterLoadingStatus: "loading"
//             }
//         case "FILTERS_FETCHED":
//             return{
//                 ...state,
//                 filters: action.payload,
//                 filterLoadingStatus: 'sam'
//             }
//         case "FILTERS_FETCHING_ERROR":
//             return{
//                 ...state,
//                 filterLoadingStatus: 'error'
//             }
//         case "ACTIVE_FILTER_CHANCHED":
//             return{
//                 ...state,
//                 activeFilter: action.payload,
//             }
//         default:
//             return state;
//     }
// }

// export default filter;