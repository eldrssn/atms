import { getMaxOfArray, getMinOfArray, toFloat } from "./utils";

export const withdraw = (value, cash, setOutputInfo) => {
  const MIN_VALUE = 50;
  const bills = [5000, 2000, 1000, 500, 200, 100, 50];
  const result = {};
  let totalReceived = 0;
  
  const getMinValue = () => {
    let num;
    for (let bill in cash) {
      num = cash[bill];
      if (num > cash[bill]) {
        num = cash[bill];
      }
    }
    return num;
  }
  // минимальное количество купюр
  const minValue = getMinValue();

  const getRatio = () => {
    let result = [];
    for (let bill in cash) {
      let distr = cash[bill] / minValue;
      result.push(distr);
    }
    return result;
  }
  // соотношение купюр в банкомате
  const ratio = getRatio();

  const getResult = (i) => {
    (!result[bills[i]]) ? result[bills[i]] = 1 : result[bills[i]]++;
    value -= bills[i];
    totalReceived += bills[i]
    cash[bills[i]]--;
  }

  const counting = () => {
      const maxRatio = getMaxOfArray(ratio);
      const minRatio = getMinOfArray(ratio);
      const indexMaxRatio = ratio.indexOf(maxRatio);

      for (let i = 0; i < ratio.length; i++) {
        // сначала цикл идет по купюрам, которые в большем количестве
        if (maxRatio !== minRatio && value >= bills[indexMaxRatio]) {
          while (value >= bills[indexMaxRatio]) {
            getResult(indexMaxRatio);
          }
          continue;
        } 
        // затем купюры выдаются в одинаковых пропорциях
        if (value >= bills[i]) {
          if (!cash[bills[i]]) {
              continue;
            }
          getResult(i);
          } 
        }
        // рекурсия
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