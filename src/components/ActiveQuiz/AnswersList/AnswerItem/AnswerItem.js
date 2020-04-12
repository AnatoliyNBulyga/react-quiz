import React from "react";
import c from './AnswerItem.module.css';

const AnswerItem = (props) => {
    const cls = [c.answerItem];
    if (props.answerState) {
        cls.push(c[props.answerState]);
    }
    return (
        <li className={cls.join(' ')}
            onClick={ () => props.onAnswerClickHandler(props.answer.id) }>
            { props.answer.text }
        </li>
    );
}

export default AnswerItem;