const fs = require('fs');
// 1 - What floor does santae nd up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor 

function question1() {
  fs.readFile('./santa.text', (err, data) => { 
    console.time('santa-time');
    const directions = data.toString(); 
    const directionsArray = directions.split(''); 
    const answer = directionsArray.reduce((acc, currentValue) =>{
      if (currentValue === '(') {
        return acc += 1
      } else if (currentValue === ')') {
        return acc -= 1
      }
    }, 0) 
    console.timeEnd('santa-time');
    console.log('floor:', answer);
  })
}  

question1() 



// 2 - when does Santa first enter the basement 
function question2() {
 fs.readFile('./sana.txt', (err, data) => {
  const directions = data.toString(); 
  const directionsArray = directions.split(''); 
  let accumulator = 0
  const answer = directionsArray.some((currentValue) => {
    if (currentValue === '(') {
      return accumulator += 1
    } else if (currentValue === ')') {
      return accumulator -= 1
    }
  })
 })
}



