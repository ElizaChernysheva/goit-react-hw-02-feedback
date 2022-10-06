import React,{Component} from 'react';
import css from './Statistics.module.css'
import PropTypes from 'prop-types';


const Statistics = ({good,bad,neutral,total,positivePercentage}) => {
    return (
        <ul className={css.sectionStat__list}>
          <li className={css.sectionStat__item}>
            Good: <span>{good}</span>
          </li>
          <li className={css.sectionStat__item}>
            Neutral: <span>{neutral}</span>
          </li>
          <li className={css.sectionStat__item}>
            Bad: <span>{bad}</span>
          </li>
          <li className={css.sectionStat__item}>
            Total: <span>{total()}</span>
          </li>
          <li className={css.sectionStat__item}>
            Positive Feedback: <span>{positivePercentage()}%</span>
          </li>
        </ul>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}

export default Statistics;



