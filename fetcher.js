const request = require('request');

let webInput = process.argv.slice(2);

const fileWrite = require('fs');



request(webInput[0], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 
  fileWrite.writeFile(webInput[1], body, err => {
    if (!err) {
      console.log(`Successfully wrote ${webInput[0]} to ${webInput[1]}`);
    } else {
      console.error(err);
    }

  });

});
