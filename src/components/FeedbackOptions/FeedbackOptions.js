import React from 'react';
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return(
        <div className={css.btn__wrapper}>
          {options.map(option =>(
            <button
              key={option}
              className={css.button}
              name={option}
              type='btn'
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export  default FeedbackOptions;


