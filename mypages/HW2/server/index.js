const express=require("express")
const app=express()
const mysql=require("mysql")
const cors=require("cors")

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"20020416syc",
    database:"employeesystem",
    
});
app.post("/create", (req, res) =>
 {
    console.log(name)
    const name=req.body.name;
    const age=req.body.age;
    const country=req.body.country;
    const position=req.body.position;
    const wage=req.body.wage;

    db.query("INSERT INTO employees(name,age country,position,wage) VALUES (?,?,?,?,?)",
    [name,age,country,position,wage],
    (err,result) =>{
        if (err){
            console.log(err)
        }else{
            res.send("values Inserted")
        }
    }
    );

});
app.listen(3000,()=>{
    console.log("yes,your server is port 3001")
})