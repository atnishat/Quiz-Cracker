import React from 'react';
import './QUestion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Qestion = ({ques}) => {
    const {question,options,correctAnswer} = ques;
    // const correctAns = correctAnswer
    // console.log(correctAns);
 
        const click = () => toast(correctAnswer);


        const clickCorrect =(e) =>{
            const getText= e.target.innerText ;
            // console.log(getText);
            const result = getText === correctAnswer ? alert('Right') : alert('Wrong');
            

            
        }
       
    return (
        <div className='all-question-div'>
                
        
            <div className='question-div'>
            <div className='icon'>
                <button onClick={click}> 
                <ToastContainer />
                <FontAwesomeIcon icon={faEye} /></button>
                 </div>
                <p>Question:{question}</p>
                 
                
                <div className='radio-button'>
                    <button id='btn-1' onClick={clickCorrect }> {options[0]}</button>
                    <button id='btn-2' onClick={clickCorrect}>{options[1]}</button>
                    <button id='btn-3' onClick={clickCorrect }>{options[2]}</button>
                    <button id='btn-4' onClick={clickCorrect }>{options[3]}</button>
                  
              
                                
                    </div>
           
           
            </div>
            

</div>
       
    );
};

export default Qestion;