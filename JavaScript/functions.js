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

    array.push(parseFloat(value));
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
  console.log(numberOne, numberTwo);
  return parseFloat((numberOne + numberTwo).toFixed(2));
}

function subsFunc(numberOne, numberTwo)
{
  return parseFloat((numberOne - numberTwo).toFixed(2));
}

function divFunc(numberOne, numberTwo)
{
  if(numberTwo == 0)
  {
    throw "You can't divide by zero";
  }
  else
  {
    return parseFloat((numberOne / numberTwo).toFixed(2));
  }
}

function multiFunc(numberOne, numberTwo)
{
  return parseFloat((numberOne * numberTwo).toFixed(2));
}

//5 from 10 equal 50 percent
function percentFunc(numberOne, numberTwo)
{
  return parseFloat(((numberOne * 100) / numberTwo).toFixed(2));
}

export function doMath(numbers, operators)
{
  const numbersArr = changeToNumArr(numbers);
  const operatorsArr = changeToOperatorsArr(operators);
  let arrayToMath = mergeArrays(numbersArr, operatorsArr);

  let numberRef = 0, operatorRef = 1;
  let numberVal = null, operatorVal = null;
  let i = 0;

  while(i < arrayToMath.length)
  {
    numberVal = arrayToMath[numberRef];
    operatorVal = arrayToMath[operatorRef];

    switch(operatorVal)
    {
      case "+":
        arrayToMath[numberRef + 2] = sumFunc(numberVal, arrayToMath[numberRef + 2]);
        break;
      case "-":
        arrayToMath[numberRef + 2] = subsFunc(numberVal, arrayToMath[numberRef + 2]);
        break;
      case ":":
        try
        {
          arrayToMath[numberRef + 2] = divFunc(numberVal, arrayToMath[numberRef + 2]);
        }
        catch(error)
        {
          console.log(error);
          arrayToMath.pop();
        }
        break;
      case "*":
        arrayToMath[numberRef + 2] = multiFunc(numberVal, arrayToMath[numberRef + 2]);
        break;
      case "%":
        arrayToMath[numberRef + 2] = percentFunc(numberVal, arrayToMath[numberRef + 2]);
        break;
    };

    numberRef++;
    operatorRef++;
    i++;
  }

  return arrayToMath;
}