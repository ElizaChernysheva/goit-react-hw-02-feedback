import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

   handleOnClick = (event) =>{
   const {name} = event.currentTarget;
     this.setState((prevState)=>{
       return {
         ...this.state,
         [name]:prevState[name] + 1,
       }
     })
   }

   countTotalFeedback = () =>{
     const {good,bad,neutral} = this.state;
     return good + bad + neutral;
   }

   countPositiveFeedbackPercentage = () =>{
     const {good} = this.state;
     const total = this.countTotalFeedback()
     return !good ? 0: (good * 100 / total).toFixed(1);
   }

  render() {
    const {good,bad,neutral} = this.state;

    return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleOnClick}
        />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ?
          <Statistics good={good}
                      neutral={neutral}
                      bad={bad}
                      total={this.countTotalFeedback}
                      positivePercentage={this.countPositiveFeedbackPercentage}
          /> :
          <Notification message="There is no feedback"/>
        }

      </Section>
    </div>
    );
  }
};

export default App;

