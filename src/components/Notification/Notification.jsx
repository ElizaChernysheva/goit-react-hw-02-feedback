import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css'

const  Notification = ({message}) => {
  return(
    <h2 className={css.heading}>{message}</h2>
  )
}

Notification.propTypes = {
  message:PropTypes.string.isRequired,
}

export default Notification;



