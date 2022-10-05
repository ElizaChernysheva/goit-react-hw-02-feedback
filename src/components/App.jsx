import React, { Component } from 'react';

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

  render() {
    const {good,bad,neutral} = this.state;
    const total = Number(good) + Number(bad) + Number(neutral);
    const positive = !good ? 0: (good * 100 / total).toFixed(1);
    return (
      <div>
        <section className='section'>
          <h2 className='heading'>Please leave feedback</h2>
          <div className='btn__wrapper'>
            <button className='button' name='good' type='btn' onClick={this.handleOnClick}>Good</button>
            <button className='button' name='neutral' type='btn' onClick={this.handleOnClick}>Neutral</button>
            <button className='button' name='bad' type='btn' onClick={this.handleOnClick}>Bad</button>
          </div>
        </section>

        <section className='section section-stat'>
          <h2 className='heading'>Statistics</h2>
          <ul className='section-stat__list'>
            <li className='section-stat__item'>
              Good: <span>{good}</span>
            </li>
            <li className='section-stat__item'>
              Neutral: <span>{neutral}</span>
            </li>
            <li className='section-stat__item'>
              Bad: <span>{bad}</span>
            </li>
            <li className='section-stat__item'>
              Total: <span>{total}</span>
            </li>
            <li className='section-stat__item'>
              Positive Feedback: <span>{positive}%</span>
            </li>
          </ul>
        </section>

      </div>
    );
  }
};

export default App;

