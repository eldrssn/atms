import React from 'react';
import { showAmountOfMoney } from '../utils';

const CardATM = ({atm, onATMClick}) => {
  const {title, cash} = atm;

  return (
    <li onClick={() => onATMClick(atm)}>
      <div>
        {title}
        <span 
          className="question-sign" 
          data-tooltip={'Наличных в банкомате: ' + showAmountOfMoney(cash)}
        >
          ?
        </span>
      </div>
    </li>
  );
};

export default CardATM;