import { FeedbackStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackStyled>
      <div className="buttons">
        {options.map(option => (
          <button
            key={option}
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </FeedbackStyled>
  );
};
