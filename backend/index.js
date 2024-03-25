const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://roopasree2509:Roopa@cluster0.l3h065d.mongodb.net/e-commerce")

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// Creating Upload Endpoint for Images
app.post("/upload",)

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port " +port)
    }
    else{
        console.log("Error : " + error)
    }
})