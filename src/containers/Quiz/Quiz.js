import React, {Component} from "react";
import c from './Quiz.module.css';

export default class Quiz extends Component {
    state = {
        quiz: []
    }
    render() {
      return (
        <div className={c.quiz}>
          <h1>Quize</h1>
        </div>
      );
    }
};