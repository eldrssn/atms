import React, { useState, useRef } from 'react';
import { showAmountOfMoney } from '../utils';
import Output from './Output';
import { isRightPattern, toNum } from '../utils';
import Numpad from './Numpad';
import { withdraw } from '../withdrawCash';

const ATMPage = ({atm}) => {
  
  let [value, setValue] = useState('');
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [outputInfo, setOutputInfo] = useState({
    waitingCash: false,
    totalReceived: 0,
    amountOfBills: 0,
    change: 0
  })
  let inputRef = useRef(null);
  
  const onChangeValue = (evt) => {    
    isRightPattern(evt, setValue, /^[ 0-9,]+$/)
  }
  
  const setValueAndFocus = (value) => {
    setValue(value);
    inputRef.focus();
  }

  const onClickButton = (key) => {
    if (key === "ok" && !value) {
      inputRef.focus();
      return;
    }

    if (key === "ok" && value) {
      withdraw(toNum(value), atm.cash, setOutputInfo);
      setIsWithdraw(true)
      setValueAndFocus('');
      return;
    }

    if (key === 'del') {
      setValueAndFocus('');
      return;
    }

    setValueAndFocus(value += key)
  }

  const onEnterPress = (evt) => {
    if (evt.key === 'Enter' && value) {
      withdraw(toNum(value), atm.cash, setOutputInfo);
      setIsWithdraw(true)
      setValueAndFocus('')
    }
  }

  return (
    <div className="main-wrapper">
      <h2 className="main-header">Банкомат на <a href="/atms/">{atm.title}</a></h2>
      <div className="input-wrapper">
        <input 
          ref={(input) => {inputRef = input}}
          type="text" 
          placeholder="Введите сумму" 
          value={value} 
          autoFocus 
          onChange={onChangeValue} 
          onKeyPress={onEnterPress}
          />
        <span 
          className="question-sign" 
          data-tooltip={'Наличных в банкомате: ' + showAmountOfMoney(atm.cash)} 
        >
          ?
        </span>
      </div>
      
      <Numpad onClickButton={onClickButton}/>
      
      {isWithdraw &&
        <Output outputInfo={outputInfo} balanceOfATM={atm.cash}/>
      }
    </div>
  );
};

export default ATMPage;