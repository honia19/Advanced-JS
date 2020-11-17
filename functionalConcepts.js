// map

const mockedArray = [1, 2, 3, 4];

function myOwnMap(func, arr) {    
  const mapArr = [];      

  for(let i = 0; i < arr.length; i++) {        
     const result = func(arr[i], i, arr); 
     mapArr.push(result);    
  }

  return mapArr;
}

const square2 = myOwnMap(num => num ** 2, mockedArray);
console.log(square2);

// filter
function myOwnFilter(func, arr) {    
  const filterArr = [];      
  
  for(let i = 0; i < arr.length; i++) {        
      const res = func(arr[i], i, arr);        

      if (res) {          
        filterArr.push(arr[i]);
      }     
  }

  return filterArr;
}

const odd2 = myOwnFilter(num => num % 2 === 0, mockedArray);
console.log(odd2);

//reduce
function myOwnReduce(reducer, initialValue, arr) {
  let accumulator = initialValue;
  
  for(let i = 0; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i], i, arr);
  }

  return accumulator;
}


const sumReducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
}

const sum2 = myOwnReduce(sumReducer, 0, mockedArray);
console.log(sum2);