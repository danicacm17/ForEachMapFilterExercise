/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    // Create an empty array to store the doubled values
    let doubledArray = [];
  
    // Iterate through each element in the original array
    arr.forEach(function(value) {
      // Double the current element and push it to the new array
      let doubledValue = value * 2;
      doubledArray.push(doubledValue);
    });
  
    // Return the new array with doubled values
    return doubledArray;
  }

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    // Create an empty array to store the even values
    let evenArray = [];
  
    // Iterate through each element in the original array
    arr.forEach(function(value) {
      // Check if the current element is even
      if (value % 2 === 0) {
        // If it's even, push it to the new array
        evenArray.push(value);
      }
    });
  
    // Return the new array with only even values
    return evenArray;
  }

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    // Create an empty array to store the results
    let result = [];
  
    // Iterate through each string in the array
    arr.forEach(function(str) {
      // Extract the first and last characters of each string
      let firstChar = str[0];
      let lastChar = str[str.length - 1];
      
      // Concatenate the first and last characters and push to the result array
      result.push(firstChar + lastChar);
    });
  
    // Return the array with first and last characters of each string
    return result;
  }

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    // Iterate through each object in the array
    arr.forEach(function(obj) {
      // Add the key-value pair to each object
      obj[key] = value;
    });
  
    // Return the modified array of objects
    return arr;
  }

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
  // Convert the string to lowercase to make it case insensitive
  str = str.toLowerCase();
  
  // Initialize an object to store the vowel counts
  let counts = {};

  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Iterate through each character in the string
  Array.from(str).forEach(function(char) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      // Increment the count for this vowel in the counts object
      if (counts[char]) {
        counts[char]++;
      } else {
        counts[char] = 1;
      }
    }
  });

  // Return the object with vowel counts
  return counts;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    // Use the map function to create a new array with doubled values
    let doubledArray = arr.map(function(value) {
      return value * 2;
    });
  
    // Return the new array with doubled values
    return doubledArray;
  }

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  // Use the map function to create a new array with each value multiplied by its index
  let multipliedArray = arr.map(function(value, index) {
    return value * index;
  });

  // Return the new array with values multiplied by their indices
  return multipliedArray;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arrOfObjects, key) {
    // Use the map function to create a new array with the values of the specified key
    let valuesArray = arrOfObjects.map(function(obj) {
      return obj[key];
    });
  
    // Return the new array with values of the specified key
    return valuesArray;
  }

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arrOfObjects) {
    // Use the map function to create a new array with full names
    let fullNamesArray = arrOfObjects.map(function(obj) {
      return obj['first'] + ' ' + obj['last'];
    });
  
    // Return the new array with full names
    return fullNamesArray;
  }

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arrOfObjects, key) {
    // Use the filter function to create a new array with objects containing the specified key
    let filteredArray = arrOfObjects.filter(function(obj) {
      return obj.hasOwnProperty(key);
    });
  
    // Return the new array with objects containing the specified key
    return filteredArray;
  }

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, value) {
    // Use the filter function to filter out elements that match the value
    // Then return the first element, or undefined if not found
    return arr.filter(function(element) {
      return element === value;
    })[0];
  }

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arrOfObjects, key, value) {
    // Use the filter function to filter out objects that contain the specified key and value
    // Then return the first matching object, or undefined if not found
    return arrOfObjects.filter(function(obj) {
      return obj[key] === value;
    })[0];
  }

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
    
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Use the filter function to create a new array with non-vowel characters
    let filteredChars = Array.from(str).filter(function(char) {
      return !vowels.includes(char);
    });
  
    // Join the filtered characters back into a string and return it
    return filteredChars.join('');
  }

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    // Use map to double each element and then filter to keep only odd numbers
    return arr.map(function(num) {
      return num * 2;
    }).filter(function(num) {
      return num % 2 !== 0;
    });
  }