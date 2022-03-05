import { useHttp } from "../hook/useHttp";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {newsFetching, newsFetched, newsFetchingError, newsDeleted} from '../redux/action';
import Spinner from "./Spinner";
import Error from "./Error";
import NewsListItem from "./NewsListItem";


export default function NewsList() {
    const {filteredNews, filterLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
       dispatch(newsFetching());
       request("http://localhost:3001/news")
        .then(data => dispatch(newsFetched(data)))
        .catch(() => dispatch(newsFetchingError()))
    }, [])


    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/news/${id}`, "DELETE")
            .then(data => console.log(data + "DELETED"))
            .then(dispatch(newsDeleted(id)))
            .catch(err => console.log(err))
    }, [])

    if(filterLoadingStatus === "loading"){
        return <Spinner/>
    }else if (filterLoadingStatus === "error"){
        return <Error/>
    }

    const renderNewsList = (arr) => {
        if(arr.length === 0) {
            return <h4 className="text-center mt5">New doesn't exists</h4>
        }
        return arr.map(({id, ...props}) => {
            return <NewsListItem key={id} onDelete={() => onDelete(id)} {...props}/> 
        }).reverse()
    }

    const element = renderNewsList(filteredNews)


    return(
        <ul>{element}</ul>
    )
}