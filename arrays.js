var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(chocolateBars, Felix){
  const morecats=["Felix",...chocolateBars];
  return(morecats,);
}


function destructivelyAddElementToBeginningOfArray(chocolateBars, Felix){
  chocolateBars.unshift("Felix");
  return(chocolateBars,);
}
