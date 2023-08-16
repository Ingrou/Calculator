import {addEventAll, doMath} from "./functions.js";

const numberArray = [new Array];
const operatorsArray = [];
let operatorsCount = 0;
let numbersCount = 0;
let numberArrayCount = 1;
let operatorsArrayCount = 0;
let semiFirst = false;
let semiMemory = 0;


function addToCorrectArray(element)
{
  let elementClassSecondPart = element.className.split(" ")[1];

  if(elementClassSecondPart == "--numberSign" && semiFirst == false)
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
  else if(elementClassSecondPart == "--operatorSign")
  {
    if(operatorsArrayCount < numberArrayCount)
    {
      operatorsArray.push(new Array);
      operatorsArrayCount++;
      operatorsArray[operatorsArrayCount - 1].push(element.innerText);
      operatorsCount++;
      console.log(numberArray);
    }
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













