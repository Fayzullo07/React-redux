import React from 'react';
// import bg from '../assets/bg.jpg'
function NewsListItem({name, description, category}) {
    let elementClassName;
    switch(category){
        case "Hot News":
            elementClassName = "bg-danger bg-gradient";
            break
        case "Sport News":
            elementClassName = "bg-primary bg-gradient";
            break
        case "World News":
            elementClassName = "bg-secondary bg-gradient";
            break
        default:
            elementClassName = "bg-info bg-gradient"
    }
    return (
        <li className={`card flex-row shadow-lg text-white my-2 ${elementClassName}`} >
            <div className='card-body'>
                <h3 className='card-title'>{name}</h3>
                <p className='card-text'>{description}</p>
            </div>
            <img 
                src='https://picsum.photos/141/94' 
                alt='News Img' 
                className='imf-fluid w-25 d-inline'
                style={{'objectFit': 'cover'}}
            />
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light'>
                <button type='button' className='btn-close' aria-label='Close'></button>
            </span>
        </li>
    );
}

export default NewsListItem;