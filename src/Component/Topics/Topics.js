import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qestion from '../Question/Qestion';
import QuizName from '../Quizname/QuizName';
import './Topic.css'

const Topics = () => {
    const topic = useLoaderData().data.questions;
    // const option = useLoaderData().data.questions[0].options;
    // const option = useLoaderData().data.questions[0];
    // console.log(topic[0].options);
    
    return (
        <div>
            <QuizName></QuizName>
            {/* <p>Id{topic[0].id}</p> */}

           <div className='topics'>
           <div className='topic-info'>
           {
                topic.map(ques=> <Qestion
                key={ques.id}
                ques={ques}
                ></Qestion>)
            }
           </div>
           </div>
        </div>
    );
};

export default Topics;