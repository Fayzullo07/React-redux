import { useHttp } from "../hook/useHttp";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {newsFetching, newsFetched, newsFetchingError, newsDeleted} from '../redux/action';
import Spinner from "./Spinner";
import Error from "./Error";
import NewsListItem from "./NewsListItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './style/news_list.css'


export default function NewsList() {
    const filteredNews = useSelector((state) => {
        if(state.activeFilter === "all"){
            return state.news;
        }else{
            return state.news.filter(s => s.category === state.activeFilter)
        }
    })
    const filterLoadingStatus = useSelector(state => state.filterLoadingStatus);
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
            return (
                <CSSTransition timeout={500} classNames="item">
                    <h4 className="text-center mt5">New doesn't exists</h4>
                </CSSTransition>
            )
        }
        return arr.map(({id, ...props}) => {
            return (
                <CSSTransition key={id} timeout={500} classNames="item">
                    <NewsListItem  onDelete={() => onDelete(id)} {...props}/> 
                </CSSTransition>
            )
        }).reverse()
    }

    const element = renderNewsList(filteredNews)


    return(
        <TransitionGroup component="ul">
            {element}
        </TransitionGroup>
    )
}