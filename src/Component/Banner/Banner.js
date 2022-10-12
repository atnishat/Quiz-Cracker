import React from 'react';
import './Banner.css'
import img from './img/quiz.jpg'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-img'>
                
               <img src={img} alt="" />
            </div>
            <div className='banner-info'>
                <p>Welcome to the  quiz community. Play a quiz and create your own score!!!! </p>
            </div>
        </div>
    );
};

export default Banner;