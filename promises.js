// -----------problem 1:

const testNum = num => {
  if (num > 10) {
    const results = `${num} is greater then 10, you win!!!`;
    return Promise.resolve(results);
  } else {
    const results = `${num} is less then 10, you lose!!!`;
    return Promise.reject(results);
  }
 }

// example: testNum(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// // 15 is greater than 10, success!

// testNum(5)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// // 5 is less than 10, error!

// -------------------problem 2:

const makeAllCaps = words => {
  const allCaps = words.map( word => {
    if (typeOf === 'string') {
      return Promise.resolve(word.toUpperCase());
    } else {
      return Promise.rejects('You did not pass in a string, you fail')
    }
  });
  return Promise.all(allCaps)
}

const sortWords = words => {
  const sortedWords = words.sort();
  return Promise.resolve(sortedWords);
}

//example: makeAllCaps(['wowow', 'pants', 'bird'])
//   .then(words => sortWords(words))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
  
// // ['BIRD', 'PANTS', 'WOWOW']


// makeAllCaps(['wowow', 5, 'bird'])
//   .then(words => sortWords(words))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
  
// // 'No, the array you passed in contained an element that was not a string!'