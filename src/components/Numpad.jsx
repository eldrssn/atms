import React from 'react';
import { numpad } from '../data';

const Numpad = ({onClickButton}) => {
  return (
    <section className="numpad-wrapper">
        {numpad.map(key => {
          return <button 
            key={key} 
            type="button"
            onClick={() => onClickButton(key)}
          >
            {key}
          </button>
        })}
      </section>
  );
};

export default Numpad;