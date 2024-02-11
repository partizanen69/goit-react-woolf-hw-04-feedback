import { FeedbackStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const handleClick = e => {
    onLeaveFeedback(e.target.name);
  };

  return (
    <FeedbackStyled>
      <div className="buttons">
        {options &&
          options.map(option => (
            <button key={option} name={option} onClick={handleClick}>
              {option}
            </button>
          ))}
      </div>
    </FeedbackStyled>
  );
};
