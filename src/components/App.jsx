import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { Component } from 'react';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
  };

  render() {
    const { quizItems } = this.state;
    return <QuizList items={quizItems} />;
  }
}
