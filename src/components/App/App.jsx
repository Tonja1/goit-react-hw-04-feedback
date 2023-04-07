import { Statistic } from "../Statistics/Statistics";
import { useState } from "react";
import { FeedbackOptions } from '../FeedbackOption/FeedbackOption';
import { Section } from '../Title/Title';
import { GlobalStyle } from '../Globalstyle';
import { Container } from "./AppStyled";



export const App =() => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
const countTotalFeedback = () => {
  return good + neutral + bad;
};

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100 || 0;
};

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
 
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options = {['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
        <Statistic
          total={countTotalFeedback}
          good={good}
          neutral={neutral}
          bad={bad}
          percentage={countPositiveFeedbackPercentage}
        />
        <GlobalStyle />
      </Section>
    </Container>
  );
}
  

