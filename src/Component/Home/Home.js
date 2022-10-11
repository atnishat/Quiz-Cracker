import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizs = useLoaderData().data;  
    // console.log(quizs);


    const practice = quiz =>{
        console.log(quiz);
    }
    return (
        <div className='home-container'>
           
           {
            quizs.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}
            practice={practice}
            ></Quiz>)
           }
            
        </div>
    );
};

export default Home;