export function addEventAll(handler, event, callback)
{
  return Array.from(document.querySelectorAll(handler)).map(element => {
    element.addEventListener(event, callback);
  });
}

function changeToNumArr(numbers)
{
  const array = new Array;
  for(let i = 0; i < numbers.length; i++)
  {
    let value = numbers[i]
      .reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });

    array.push(parseInt(value));
  }
  return array;
}

function changeToOperatorsArr(operators)
{
  let array = new Array;
  for(let element of operators)
  {
    array.push(element[0]);
  }
  return array;
}

function mergeArrays(numbers, operators)
{
  let array = new Array;
  for(let i = 0; i < numbers.length; i++)
  {
    array.push(numbers[i]);
    if(i < operators.length)
    {
      array.push(operators[i]);
    }
  }
  return array;
}

function sumFunc(numberOne, numberTwo)
{
  return numberOne + numberTwo;
}

function subsFunc(numberOne, numberTwo)
{
  return numberOne - numberTwo;
}

function divFunc(numberOne, numberTwo)
{
  return numberOne / numberTwo;
}

function multiFunc(numberOne, numberTwo)
{
  return numberOne * numberTwo;
}

//5 from 10 equal 50 percent
function percentFunc(numberOne, numberTwo)
{
  return (numberOne * 100) / numberTwo;
}

export function doMath(numbers, operators)
{
  const numbersArr = changeToNumArr(numbers);
  const operatorsArr = changeToOperatorsArr(operators);
  let arrayToMath = mergeArrays(numbersArr, operatorsArr);

  let numberRef = 0;
  let operatorRef = 1;
  let numberVal = null;
  let operatorVal = null;
  let result = arrayToMath;
  let i = 0;

  while(i < arrayToMath.length)
  {
    numberVal = arrayToMath[numberRef];
    operatorVal = arrayToMath[operatorRef];

    if(operatorVal == "+")
    {
      arrayToMath[numberRef + 2] = sumFunc(numberVal, arrayToMath[numberRef + 2]);
    }
    else if(operatorVal == "-")
    {
      arrayToMath[numberRef + 2] = subsFunc(numberVal, arrayToMath[numberRef + 2])
    }
    else if(operatorVal == ":")
    {
      arrayToMath[numberRef + 2] = divFunc(numberVal, arrayToMath[numberRef + 2]);
    }
    else if(operatorVal == "*")
    {
      arrayToMath[numberRef + 2] = multiFunc(numberVal, arrayToMath[numberRef + 2]);
    }
    else if(operatorVal == "%")
    {
      arrayToMath[numberRef + 2] = percentFunc(numberVal, arrayToMath[numberRef + 2]);
    }


    numberRef++;
    operatorRef++;
    i++;
  }

  return result;
}