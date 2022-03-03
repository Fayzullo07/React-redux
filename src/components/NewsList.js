import { useHttp } from "../hook/useHttp";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {newsFetching, newsFetched, newsFetchingError} from '../redux/action';
import Spinner from "./Spinner";
import Error from "./Error";
import NewsListItem from "./NewsListItem";

export default function NewsList() {
    const {news, newsLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();
    console.log(newsLoadingStatus)

    useEffect(() => {
       dispatch(newsFetching());
       request("http://localhost:3001/news")
        .then(data => dispatch(newsFetched(data)))
        .catch(() => dispatch(newsFetchingError()))
    }, [])

    if(newsLoadingStatus === "loading"){
        return <Spinner/>
    }else if (newsLoadingStatus === "error"){
        return <Error/>
    }

    const renderNewList = (arr) => {
        if(arr.length === 0) {
            return <h4 className="text-center mt5">New doesn't exists</h4>
        }
        return arr.map(({id, ...props}) => {
            return <NewsListItem key={id} {...props}/> 
        })
    }

    const element = renderNewList(news)


    return(
        <ul>{element}</ul>
    )
}