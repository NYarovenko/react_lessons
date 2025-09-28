import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    topicFilter: '',
    levelFilter: 'all',
  };

  changeTopicFilter = newFilter => {
    this.setState({
      topicFilter: newFilter,
    });
  };

  changeLevelFilter = newFilter => {
    this.setState({
      levelFilter: newFilter,
    });
  };

  render() {
    const { quizItems, topicFilter, levelFilter } = this.state;
    return (
      <>
        <SearchBar
          topic={topicFilter}
          level={levelFilter}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={this.changeLevelFilter}
        />
        <QuizList items={quizItems} />;
      </>
    );
  }
}
