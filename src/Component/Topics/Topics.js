import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Name from '../Name/Name';
import Qestion from '../Question/Qestion';
import QuizName from '../Quizname/QuizName';
import './Topic.css'

const Topics = () => {
    const topic = useLoaderData().data.questions;
//    console.log(topic);
    
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
            {
                topic.map(hl => <Name
                key={hl.id}
                hl={hl}
                ></Name>)
            }
           </div>
           </div>
        </div>
    );
};

export default Topics;