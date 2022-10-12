import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizs = useLoaderData().data;  
    // console.log(quizs);


   
    return (
        <div >
           <div>
           <Banner></Banner>
           </div>
           
           <div className='home-container'>
           {
            quizs.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}
            
            ></Quiz>)
           }
            
           </div>
        </div>
    );
};

export default Home;