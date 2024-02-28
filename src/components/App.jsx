import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { AppStyled } from './App.styled';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const FeedbackOption = {
  good: 'good',
  bad: 'bad',
  neutral: 'neutral',
};

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = appraisal => {
    const setterMap = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };

    setterMap[appraisal](prevAppraisal => prevAppraisal + 1);
  };

  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);

  return (
    <AppStyled>
      <div className="container">
        <Section title="Please leave you feedback">
          <FeedbackOptions
            options={Object.values(FeedbackOption)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            ></Statistics>
          )}
        </Section>
      </div>
    </AppStyled>
  );
};
