import { StatisticsStyled } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsStyled>
      <div className="stat-block">Good: {good}</div>
      <div className="stat-block">Neutral: {neutral}</div>
      <div className="stat-block">Bad: {bad}</div>
      <div className="stat-block">Total: {total}</div>
      <div className="stat-block">Positive feedback: {positivePercentage}%</div>
    </StatisticsStyled>
  );
};
