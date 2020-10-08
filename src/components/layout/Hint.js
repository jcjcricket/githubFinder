import React from 'react';
import './Hint.css';

const Hint = (props) => {
  return (
    props.hint !== null && (
      <div class='row' >
        <div class='col s12' id='hintStyle'>{props.hint}</div>
      </div>
    )
  );
};

export default Hint;
