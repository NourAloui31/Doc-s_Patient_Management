const mysql = require('mysql2');

//Create a database connection 

const connection = mysql.createConnection({
  "host": "localhost",
  "user": "root",
  "password": "root",
  "database": "Patients"
});

// Connect to the database and make sure to log a message related to the connection state 
connection.connect(error=>{
  if (error){
    console.log("Connection failed", error)}
    else console.log("You are connected")
})

module.exports=connection
