import React from 'react';
import { showAmountOfMoney } from '../utils';
import Loader from 'react-loader-spinner';

const Output = ({ outputInfo, balanceOfATM}) => {
  const { waitingCash, totalReceived, amountOfBills, change } = outputInfo;

  return (
    <>
      {waitingCash ? (
        <div className="loader">
          <Loader type="Puff" color="#2c3be04b" height={120} width={120} />
        </div>
      ) : (    
        <div className="output">
          <p>Вы получили: {totalReceived}₽</p>
          <p className="output-bills">В купюрах: {showAmountOfMoney(amountOfBills)}</p>
          <p>Не выдано: {change}₽</p>
          <p className="output-bills">Остаток в банкомате: {showAmountOfMoney(balanceOfATM)}</p>
        </div>
      )}
    </>
  );
};

export default Output;