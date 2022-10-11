import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qestion from '../Question/Qestion';

const Topics = () => {
    const topic = useLoaderData().data.questions;
    // const option = useLoaderData().data.questions[0].options;
    // const option = useLoaderData().data.questions[0];
    // console.log(topic[0].options);
    
    return (
        <div>
            <h2>Quiz of: {topic.length}</h2>
            {/* <p>Id{topic[0].id}</p> */}

           <div className='topics'>
           <div>
           {
                topic.map(ques=> <Qestion
                key={ques.id}
                ques={ques}
                ></Qestion>)
            }
           </div>
            
            <div className='total-score'>
                <h2>Total</h2>
             </div> 
           </div>
        </div>
    );
};

export default Topics;