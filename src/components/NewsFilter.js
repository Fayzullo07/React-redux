import { useHttp } from '../hook/useHttp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';

import React from 'react';

function NewsFilter() {
    return (
        <div className='card shadow-lg mt-4'>
            <div className='card-body'>
                <p className='card-text'>Filter by category</p>
                <div className='btn-group'>
                    <button className='btn btn-outline-dark active'>All</button>
                    <button className='btn btn-danger'>Hot News</button>
                    <button className='btn btn-primary'>Sport News</button>
                    <button className='btn btn-success'>World News</button>
                </div>
            </div>
        </div>
    );
}

export default NewsFilter;