import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  deleteQuizItem = id => {
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== id),
    }));
  };

  changeFilter = (key, valye) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [key]: valye,
      },
    }));
  };

  getVisibleItems = () => {
    const { quizItems, filters } = this.state;

    return quizItems.filter(quiz => {
      const topicFilter = filters.topic.toLowerCase();
      const hasTopic = quiz.topic.toLowerCase().includes(topicFilter);

      if (filters.level === 'all') {
        return hasTopic;
      }

      return hasTopic && quiz.level === filters.level;
    });
  };

  render() {
    const { filters } = this.state;
    const visibleItems = this.getVisibleItems();

    return (
      <>
        <SearchBar filters={filters} onChange={this.changeFilter} />
        <QuizList items={visibleItems} onDelete={this.deleteQuizItem} />;
      </>
    );
  }
}
