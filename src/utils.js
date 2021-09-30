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

export const toFloat = (num) => {
  return num.toFixed(2);
}

export const getMaxOfArray = (numArray) => {
  return Math.max.apply(null, numArray);
}

export const getMinOfArray = (numArray) => {
  return Math.min.apply(null, numArray);
}