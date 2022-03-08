import { useHttp } from '../../hook/useHttp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner';
import classNames from 'classnames';
import { activeFilterChanged} from '../../redux/action';
import {filtersFetching, filtersFetched, filtersFetchingError} from './filter_slice';

import React from 'react';
import Error from '../Error';

function NewsFilter() {
    const {filters, filterLoadingStatus, activeFilter} = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
    }, [])

    if(filterLoadingStatus === "loading"){
        return <Spinner/>
    }else if(filterLoadingStatus === "error"){
        return <Error/>
    }

    const renderFilters = (arr) => {
        if(arr.length === 0){
            return <h5 className='text-center mt-5'>Filters doesn't exists</h5>
        }
        return arr.map(({name, className, label}) => {
            const btnClasses = classNames('btn', className, {
                "active": name === activeFilter
            })
            return <button key={name} id={name} className={btnClasses} onClick={() => dispatch(activeFilterChanged(name))} >{label}</button>
        })
    }

    const element = renderFilters(filters);

    return (
        <div className='card shadow-lg mt-4'>
            <div className='card-body'>
                <p className='card-text'>Filter by category</p>
                <div className='btn-group'>
                    {element}
                </div>
            </div>
        </div>
    );
}

export default NewsFilter;
