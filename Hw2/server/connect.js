var mysql=require("mysql")

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"20020416syc"

});
con.connect(function(err){
    if (err) throw err;
    console.log("Connected")
})