import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { AppStyled } from './App.styled';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  onLeaveFeedback = appraisal => {
    const newState = {
      ...this.state,
      [appraisal]: this.state[appraisal] + 1,
    };

    const { good, neutral, bad } = newState;
    const total = good + neutral + bad;
    const positive = Math.round((good / total) * 100);
    newState.total = total;
    newState.positive = positive;
    return this.setState(newState);
  };

  render() {
    return (
      <AppStyled>
        <div className="container">
          <Section title="Please leave you feedback">
            <FeedbackOptions
              options={['good', 'bad', 'neutral']}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {this.state.total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.total}
                positivePercentage={this.state.positive}
              ></Statistics>
            )}
          </Section>
        </div>
      </AppStyled>
    );
  }
}
