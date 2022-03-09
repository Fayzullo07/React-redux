import { useHttp } from "../../hook/useHttp";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {fetchNews } from '../../redux/action';
import Spinner from "../Spinner";
import Error from "../Error";
import NewsListItem from "../NewsListItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import { createSelector } from 'reselect';
import '../style/news_list.css';
import {newsDeleted, fetchNews, filteredNewsSelected} from './news_slice'


export default function NewsList() {
    
    const filteredNews = useSelector(filteredNewsSelected)
    const filterLoadingStatus = useSelector(state => state.filter.filterLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchNews())
    }, [])


    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/news/${id}`, "DELETE")
            .then(data => console.log(data + "DELETED"))
            .then(dispatch(newsDeleted(id)))
            .catch(() => dispatch("NEWS_FETCHING_ERROR"))
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