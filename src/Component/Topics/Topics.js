import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qestion from '../Question/Qestion';

const Topics = () => {
    const topic = useLoaderData().data.questions;
    console.log(topic);
    return (
        <div>
            <h2>topic: {topic.length}</h2>
            {/* <p>Id{topic[0].id}</p> */}

            {
                topic.map(ques=> <Qestion
                key={ques.id}
                ques={ques}
                
                ></Qestion>)
            }


        </div>
    );
};

export default Topics;