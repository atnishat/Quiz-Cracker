import React from 'react';
import './QUestion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Qestion = ({ques}) => {
    const {question,options,correctAnswer} = ques;
    // console.log(correctAnswer);
 
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
                    <button><input type="radio" value="" name=""/>{options[0]}</button>
                    <button><input type="radio" value="" name=""/>{options[1]}</button>
                    <button><input type="radio" value="" name=""/>{options[2]}</button>
                    <button><input type="radio" value="" name=""/>{options[3]}</button>
                
              
                                
                    </div>
           
                
            </div>
            

</div>
       
    );
};

export default Qestion;