require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConnector = require('./config/dbConnector.js');
const cookieParser = require("cookie-parser")


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000', 
     credentials: true
}));


dbConnector();

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));


app.use("/api/auth",require("./routes/auth"));

app.use("*",(req,res)=>{
    res.status(404).json({message:"Page not found"});
});


mongoose.connection.on("open",()=>{
    console.log("Connected to Database...");

    app.listen(PORT,()=>{
        console.log(`Server is listening on PORT ${PORT}`);
    });
});

module.exports = app;