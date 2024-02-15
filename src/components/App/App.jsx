import { Component } from 'react';
import css from './App.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  render() {
    return (
      <section className={css.sectionWrapper}>
        <h1 className={css.title}>Please leave feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </section>
    );
  }
}

export default App;
