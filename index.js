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

//make first letter of every word capital
//return change[0].toUpperCase() + change.substring(1);}).join(" ");
function titleCased(){
  return tutorials.map(x => {
    const newArray= x.split(" ")
    console.log(newArray)
    return newArray.map(word => {
      return word[0].toUpperCase() + word.substring(1)
    }).join(" ")
  })
}
