import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
//  console.log(quiz);
const {logo, name,id}= quiz
    
    return (
        <div className='full-logo' >
           <div className='logo'>
           <img src={logo} alt="" />
           </div>
          <div className='logo-info'>
          <h2>{name}</h2>
          <Link to={`/${id}`}>Start</Link>
          
            {/* <button onClick={() => practice(quiz)}>Start</button> */}
          </div>
         </div>
    );
};

export default Quiz;