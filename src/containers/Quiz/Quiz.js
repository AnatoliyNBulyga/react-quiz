import React, {Component} from "react";
import c from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../store/actions/quiz";

class Quiz extends Component {

    componentDidMount() {
      this.props.fetchQuizById(this.props.match.params.id);
    }
    componentWillUnmount() {
        this.props.retryQuiz();
    }

    render() {
        console.log(this.props)
      return (
        <div className={c.quiz}>
          <div className={c.quizWrapper}>

              <h1>Ответьте на все вопросы</h1>

              {
                  this.props.loading || !this.props.quiz
                      
                  ? <Loader/>

                  : this.props.isFinished
                      ? <FinishedQuiz
                          results={this.props.results}
                          quiz={this.props.quiz}
                          onRetry={this.props.retryQuiz}
                      />
                      : <ActiveQuiz
                          answers={this.props.quiz[this.props.activeQuestion].answers}
                          question={this.props.quiz[this.props.activeQuestion].question}
                          onAnswerClickHandler={this.props.quizAnswerClick}
                          quizLength={this.props.quiz.length}
                          answerNumber={this.props.activeQuestion + 1}
                          answerState={this.props.answerState}
                      />
              }

          </div>
        </div>
      );
    }
};
const mapStateToProps = (state) => ({
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
});
const mapDispatchToProps = (dispatch) => ({
    fetchQuizById: (id) => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);