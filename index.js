var numInLine = 0;

function takeANumber(katzDeliLine){
  numInLine += 1
  katzDeliLine.push(numInLine);
  return `You are number ${katzDeliLine.length} in line. Your ticket is ${numInLine}`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1){
    return  "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length < 1){
    return "The line is currently empty.";
  }else{
    return `The line is currently: ${katzDeliLine.join(', ')}`;
  }
}