import React from 'react';

import Word from './word';
import classes from './List.module.css';

const List = (props) => {
  return (
    <ul className={classes['list']}>
      {props.words.map((wordd) => (
        <Word
        key={wordd.id}
          wordy={wordd.wordy}
          meaning={wordd.meaning}
        />
      ))}
    </ul>
  );
};

export default List;
