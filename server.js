const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//middleware
app.use(morgan("dev"));
// parses req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serves up static assets
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json({
        food: "pork"
    })
});
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) 
    .then(() =>{
        console.log("connected to db")
    })
    .catch( (err) => {
        console.log(err)
    })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
console.log(`connected to PORT: ${PORT}`)
});