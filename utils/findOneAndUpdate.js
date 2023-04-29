exports.findOneAndUpdate = function(array, searchValue, updateValue) {
  let index;
  if (typeof searchValue === 'function') {
    index = array.findIndex(searchValue)
  } else {
   index = array.findIndex(value => value === searchValue);
  }


  if (index === -1) {
    return array;
  }
  
  const updatedArray = [...array];
  updatedArray[index] = updateValue;
  return updatedArray;
}