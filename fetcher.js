const request = require("request");
const input = process.argv.slice(2).toString();
const fileDestination = process.argv.slice(3).toString();
const fs = require("fs");
let data = "This is a test";



  request(input, function (error, response, body) {
    fs.writeFile(fileDestination, body, (err) => {
      if (err)
        console.log(err);
    })
   console.log(`Downloaded and saved ${body.length} bytes to ${fileDestination}`)
    });
