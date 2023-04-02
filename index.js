const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials
    .map((string) => {
    let splitString = string.split(' ');
    let upperCase = splitString.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return upperCase.join(' ');
  });  
}
titleCased(tutorials);



// using replace()

// const titleCased = () => {
//   return tutorials
//     .map((string) => {
//     let splitString = string.split(' ');
//     let upperCase = splitString.map((word) => {
//       return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
//     })
//     return upperCase.join(' ');
//   });  
// }
// titleCased(tutorials);



// using index and substring

// const titleCased = () => {
//   return tutorials
//     .map((string) => {
//       let splitString = string.split(' ');
//       let upperCase = splitString.map((word) => {
//         return word[0].toUpperCase() + word.substring(1);
//       })
//       return upperCase.join(' ');
//     })
// }
// titleCased(tutorials);