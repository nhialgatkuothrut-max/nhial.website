const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());


connectDB();


app.get("/",(req,res)=>{
res.send("Nhial Portfolio API");
});


app.listen(5000,()=>{
console.log("Server running");
});
