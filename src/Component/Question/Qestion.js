import React from 'react';
import './QUestion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Qestion = ({ques}) => {
    const {question,options,correctAnswer} = ques;
    console.log(correctAnswer);
 
        const click = () =>{
            alert(correctAnswer);
        }
       
    return (
        <div className='all-question-div'>

        
            <div className='question-div'>
            <div className='icon'>
                <button onClick={click}> <FontAwesomeIcon icon={faEye} /></button>
                 </div>
                <p>Question:{question}</p>
                 
                
                <div className='radio-button'>
                    
                 <h3><input type="radio" value="" name=""/>{options[0]}</h3>
                 <h3><input type="radio" />{options[1]}</h3>
                 <h3><input type="radio"  />{options[2]}</h3>
                 <h3><input type="radio"  />{options[3]}</h3>
                
              
                                
                    </div>
           
                
            </div>
            

</div>
       
    );
};

export default Qestion;