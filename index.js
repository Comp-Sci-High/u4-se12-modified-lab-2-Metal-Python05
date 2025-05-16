const express = require("express");
const app = express();

// Task 0: Create the public and views folders and move the correct files into place


// Task 1: Set up the static files middleware


// Task 2: Set up a route handler for / that sends back index.html




// Task 3: Set the view engine to EJS. 


// Task 4: Set up a route handler for /student/ that...

  // ...creates an object called student with the following properties about yourself
  // "name" (string)
  // "advisory" (string)
  // "imageUrl" (string)
  // "funFact" (string)
  

  // ...and sends back student.ejs with the data object


// Task 5: Continue in student.ejs






app.listen(3000, ()=>{
  console.log("Server is running")
});
