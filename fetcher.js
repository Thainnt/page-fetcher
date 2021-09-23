const request = require('request');
const fs = require('fs');
const readline = require('readline');

const args = process.argv.slice(2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(args[0], (error, response, body) => {
  
  //Check URL validity
  if (error) {
    console.log("URL is invalid");
    process.exit();
  }

  //Write URL body to file
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
  });

});

// //Check if file exists
// if (exist(args[1])) {
//   rl.question(`File ${args[1] } already exists, do you want to overwrite this file? (y/n): `, (ans) => {
//     if (ans === 'y') {
//       //Write URL body to file here
//     }
//     rl.close();
//     process.exit();
//   });
// };
