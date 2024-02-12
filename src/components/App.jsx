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
  };

  onLeaveFeedback = appraisal => {
    return this.setState({
      ...this.state,
      [appraisal]: this.state[appraisal] + 1,
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(total) {
    const { good } = this.state;
    return Math.round((good / total) * 100);
  }

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(total);

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
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={positive}
              ></Statistics>
            )}
          </Section>
        </div>
      </AppStyled>
    );
  }
}
