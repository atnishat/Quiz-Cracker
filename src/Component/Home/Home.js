import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizs = useLoaderData().data;  
    // console.log(quizs);


   
    return (
        <div className='home-container'>
           
           {
            quizs.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}
            
            ></Quiz>)
           }
            
        </div>
    );
};

export default Home;