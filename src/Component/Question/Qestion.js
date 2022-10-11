import React from 'react';
import './QUestion.css'



const Qestion = ({ques}) => {
    const {question,options} = ques;
    // const { } =ques.options
    // console.log(ques.options);
    console.log(ques);
    // const { } =options
    // const {} = options
    return (
        <div className='all-question-div'>


            <div className='question-div'>
                <p>Question:{question}</p>
                
                <div className='radio-button'>
                    
                 <h3><input type="radio" />{options[0]}</h3>
                 <h3><input type="radio" />{options[1]}</h3>
                 <h3><input type="radio" />{options[2]}</h3>
                 <h3><input type="radio" />{options[3]}</h3>
                
              
                                
                    </div>
               
                
            </div>
            

</div>
       
    );
};

export default Qestion;