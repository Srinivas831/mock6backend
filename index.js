const express=require("express");
const cors=require("cors");
const { connection } = require("./db");

const app=express();

app.use(cors());
app.use(express.json());



app.get("",(req,res)=>{
    res.send("BACKEND IS RUNNING at 8080")
})

app.listen(8080,async()=>{
    try {
        await connection;
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
   
})