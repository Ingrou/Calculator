import {addEventAll, doMath, mergeArrays} from "./functions.js";

let numberArray = [new Array], operatorsArray = new Array;
let operatorsCount = 0, numbersCount = 0;
let numberArrayCount = 1, operatorsArrayCount = 0;
let semiFirst = false, minusFirst = false;
let semiMemory = 0;


function addToCorrectArray(element)
{
  let elementClassSecondPart = element.className.split(" ")[1];

  if(numbersCount == 0 && operatorsCount == 0 && element.innerText == "-"
  || minusFirst == true  && elementClassSecondPart == "--numberSign")
  {
    if(minusFirst == false)
    {
      numberArray[numberArrayCount - 1] = ["-"];
      minusFirst = true;
      console.log(numberArray);

      console.log("FROM MINUS FALSE");
    }
    else if(minusFirst == true && elementClassSecondPart == "--numberSign")
    {
      numberArray[numberArrayCount - 1][0] += (element.innerText);
      numbersCount++;
      minusFirst = false;
      console.log(numberArray);

      console.log("FROM MINUS TRUE");
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
    else if(semiFirst == true && elementClassSecondPart == "--numberSign")
    {
      numberArray[numberArrayCount -1] = [ parseFloat(semiMemory + '.' + element.innerText) ];
      numbersCount++;
      semiFirst = false;
      console.log(numberArray);
    }
  }
}

// TODO: MAKE VALUE DISPLAY ON WRIEAREA
const writeArea = document.querySelectorAll("p")[1];
const exprWriteArea = document.querySelectorAll("p")[0];


const buttons = addEventAll("button", "click", function(){
  if(this.innerText == "=")
  {
    let result = doMath(numberArray, operatorsArray);
    writeArea.innerText = result[result.length - 1];
    exprWriteArea.innerText = mergeArrays(numberArray, operatorsArray).flat().join("");

    
    numberArray[numberArrayCount - 1] = [result[result.length - 1]];

    numberArray.shift();
    numberArrayCount--;
    operatorsArray.shift();
    operatorsArrayCount--;
    console.log("Number array",numberArray);
  }
  else
  {
    addToCorrectArray(this);
    writeArea.innerText = mergeArrays(numberArray, operatorsArray).flat().join("");

    console.log(operatorsArray);
  }
});









