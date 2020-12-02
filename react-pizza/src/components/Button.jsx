import React from 'react';
import className from 'classnames';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={className('button', props.className, {
        'button--outline': props.outline,
      })}>
      {props.children}
    </button>
  );
};

export default Button;
