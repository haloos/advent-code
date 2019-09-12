const fs = require('fs');
// 1 - What floor does santae nd up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor 

function question1() {
  fs.readFile('./santa.text', (err, data) => {
    const directions = data.toString(); 
    console.log(directions)
  })
}



// 2 - when does Santa first enter the basement 
