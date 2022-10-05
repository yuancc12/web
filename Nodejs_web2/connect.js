var mysql=require("mysql")

var con=mysql.createConnection({
    host:"localhost"
    user:"root
    password:"20020416syc"
})

con.connect(function(errw){
    if(err) throw err;
    console.log("connected")
})