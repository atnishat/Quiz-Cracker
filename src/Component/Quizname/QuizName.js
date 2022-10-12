import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizName.css'


const QuizName = () => {
    const data = useLoaderData().data;
    // console.log(data);
    return (
        <div>
            <div className='topic-name'>
           <p>Quiz Of : {data.name}</p>
            </div>

        </div>
    );
};

export default QuizName;