const express = require("express");
const app = express();

// Task 0: Create the public and views folders and move the correct files into place


// Task 1: Set up the static files middleware
app.use(express.static(__dirname+"/public"))

// Task 2: Set up a route handler for / that sends back index.html
app.get("/",(req,res)=>
{res.sendFile(__dirname + "/public/index.html")

})



// Task 3: Set the view engine to EJS. 
app.set("view engine","ejs");
// Task 4: Set up a route handler for /student that...

// ...creates an object called student with the following properties about yourself
app.get("/student",(req, res)=>
{const data ={ Name:"Dave",
  Advisory:"The cool sqaud",
imageUrl:"https://ntvb.tmsimg.com/assets/assets/494807_v9_bd.jpg?w=360&h=480",
funFact:"His favorite drink is water"};

res.render("student.ejs",data)

})
  // "name" (string)
  // "advisory" (string)
  // "imageUrl" (string)
  // "funFact" (string)
  

  // ...and sends back student.ejs with the data object


// Task 5: Continue in student.ejs






app.listen(3000, ()=>{
  console.log("Server is running")
});
