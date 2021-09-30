import React from 'react';
import CardATM from './CardATM';
import { atms } from "../data";

const EnterPage = ({history, setAtm}) => {

  const onATMClick = (atm) => {
    history.push(`/atm/${atm.id}`);
    setAtm(atm);
  }
  
  return (
    <div className="main-wrapper">
      <h1 className="main-header">Выберете банкомат для выдачи денег</h1>
      <ul className="atms-wrapper">
        {atms.map(atm => {
          return <CardATM onATMClick={onATMClick} key={atm.id} atm={atm}/>
        })}
      </ul>
    </div>
  );
};

export default EnterPage;