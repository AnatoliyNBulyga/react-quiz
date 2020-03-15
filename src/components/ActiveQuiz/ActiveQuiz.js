import React from 'react';
import c from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {

    return (
        <div className={c.activeQuiz}>
           <p className={c.question}>
               <span>
                   <strong>{props.answerNumber}.</strong>&nbsp;
                   {props.question}
               </span>
               <small>{props.answerNumber} из {props.quizLength}</small>
           </p>

            <AnswersList
                answerState={props.answerState}
                answers={props.answers}
                onAnswerClickHandler={props.onAnswerClickHandler}
            />
        </div>
    );
};

export default ActiveQuiz;
