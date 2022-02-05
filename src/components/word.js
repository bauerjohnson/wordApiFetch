import React from 'react';

import classes from './Word.module.css';

const Word = (props) => {
  return (
    <li className={classes.word}>
      <h2>{props.wordy}</h2>
      <h3>{props.meaning}</h3>
     
    </li>
  );
};

export default Word;
