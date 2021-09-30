export const showAmountOfMoney = (atm) => {
  let myString = ''
  for (let banknot in atm) {
    myString += `${banknot}₽: ${atm[banknot]}шт; `;
  }
    return myString;
}

export const isRightPattern = (evt, setState, pattern) => {
  const re = pattern;
    if (evt.target.value === '' || re.test(evt.target.value)) {
      setState(evt.target.value)
    }
}

export const toNum = (string) => {
  return Number(string.replace(',', '.'))
}

const toFloat = (num) => {
  return num.toFixed(2);
}

export const withdraw = (value, cash, setOutputInfo) => {
  const MIN_VALUE = 50;
  const bills = [5000, 2000, 1000, 500, 200, 100, 50];
  const result = {};
  let totalReceived = 0;
  
  const counting = () => {
    for (let i = 0; i < bills.length; i++) {

      if (value >= bills[i]) {

        if (!cash[bills[i]]) {
          continue;
        }

        (!result[bills[i]]) ? result[bills[i]] = 1 : result[bills[i]]++;
        value -= bills[i];
        totalReceived += bills[i]
        cash[bills[i]]--;
      } 
    }
    
    if (value >= MIN_VALUE) {
      setTimeout(counting);
      setOutputInfo({waitingCash: true})
    } else {
      setOutputInfo({
        totalReceived: toFloat(totalReceived),
        amountOfBills: result,
        waitingCash: false,
        change: toFloat(value)
      })
    }
  }
    counting();
}