import {addEventAll, doMath} from "./functions.js";

const numberArray = [new Array], operatorsArray = new Array;
let operatorsCount = 0, numbersCount = 0;
let numberArrayCount = 1, operatorsArrayCount = 0;

let semiFirst = false, minusFirst = false;
let semiMemory = 0;


function addToCorrectArray(element)
{
  let elementClassSecondPart = element.className.split(" ")[1];

  if(numbersCount == 0 && element.innerText == "-" || minusFirst == true  && elementClassSecondPart == "--numberSign")
  {
    if(minusFirst == false)
    {
      numberArray[numberArrayCount - 1] = ["-"];
      minusFirst = true;
      console.log(numberArray);
    }
    else if(minusFirst == true)
    {
      numberArray[numberArrayCount - 1][0] += (element.innerText);
      numbersCount++;
      minusFirst = false;
      console.log(numberArray);
    }
  }
  else if((elementClassSecondPart == "--numberSign" && semiFirst == false))
  {
    if(numberArrayCount == operatorsArrayCount)
    {
      numberArray.push(new Array);
      numberArrayCount++;
    }
    numberArray[numberArrayCount - 1].push(element.innerText);
    numbersCount++;
    console.log(numberArray);
  }
  else if(elementClassSecondPart == "--operatorSign" && operatorsArrayCount < numberArrayCount && numbersCount > 0)
  {
    operatorsArray.push(new Array);
    operatorsArrayCount++;
    operatorsArray[operatorsArrayCount - 1].push(element.innerText);
    operatorsCount++;
    console.log(operatorsArray);
  }
  else if(elementClassSecondPart == "--charSign" || semiFirst == true)
  {
    if(semiFirst == false)
    {
      semiMemory = numberArray[numberArrayCount - 1];
      semiFirst = true;
    }
    else if(semiFirst == true)
    {
      numberArray[numberArrayCount -1] = [ parseFloat(semiMemory + '.' + element.innerText) ];
      numbersCount++;
      semiFirst = false;
      console.log(numberArray);
    }
  }
}


const wirteArea = document.querySelector("p");

const buttons = addEventAll("button", "click", function(){

  if(this.innerText == "=")
  {
    let result = doMath(numberArray, operatorsArray);
    console.log(result);
  }
  else
  {
    addToCorrectArray(this);
  }
});













