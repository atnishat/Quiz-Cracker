import React from 'react';

const Qestion = ({ques}) => {
    const {id,question,options,} = ques;
    return (
        <div>
            <div className='question-div'>
                <p>{question}</p>
            </div>

            {/* <h2>:{id}</h2>
            <input type="radio" name="" id={id} /> */}
        </div>
    );
};

export default Qestion;