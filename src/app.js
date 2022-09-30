const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get('/add',(req,res) => {
    res.sendFile(__dirname+"/index.html");
})


const response = {
    checkValue: {
        status: "failure",
        message: "Please provide input"
    },

    invalidInputs: {
        status: "error",
        message: "Invalid datatypes"
    },

    underflow: {
        status: "error",
        message: "Underflow"
    },

    Overflow: {
        status: "error",
        message: "Overflow"
    }
}

 function checkValue (num1, num2){
    if(num1 == "" || num2 == ""){
        return false;
    }
    return true;
 }

 function validateDataType (num1, num2) {
    if(isNaN(num1) || isNaN(num2) ){
        return false;
    }
    return true;
 }

 app.post("/add", (req,res) => {
    
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2)){
        return res.status(400).json (response.checkValue);
    }

    if(!validateDataType(num1, num2)){
        return res.status(400).json (response.invalidInputs);
    }

    let result = Number(num1) + Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000){
        return res.status(404).json (response.underflow);
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000){
        return res.status(404).json (response.Overflow)
    }

    res.status(200).json({
        status: "Success",
        message: "the sum of given numbers",
        sum: result
    })

})

app.get('/sub',(req,res) => {
    res.sendFile(__dirname+"/index.html");
})
    
app.post("/sub", (req,res) => {
    
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2)){
        return res.status(400).json (response.checkValue);
    }

    if(!validateDataType(num1, num2)){
        return res.status(400).json (response.invalidInputs);
    }

    let result = Number(num1) - Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000){
        return res.status(404).json (response.underflow);
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000){
        return res.status(404).json (response.Overflow)
    }

    res.status(200).json({
        status: "Success",
        message: "the difference of given numbers",
        difference: result
    })

})

app.get('/multiply',(req,res) => {
    res.sendFile(__dirname+"/index.html");
})


app.post("/multiply", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2)){
        return res.status(400).json (response.checkValue);
    }

    if(!validateDataType(num1, num2)){
        return res.status(400).json (response.invalidInputs);
    }

    let result = Number(num1) * Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000){
        return res.status(404).json (response.underflow);
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000){
        return res.status(404).json (response.Overflow)
    }

    res.status(200).json({
        status: "Success",
        message: "the product of given numbers",
        result: result
    })

})

app.get('/divide',(req,res) => {
    res.sendFile(__dirname+"/index.html");
})

app.post("/divide", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2)){
        return res.status(400).json (response.checkValue);
    }

    if(!validateDataType(num1, num2)){
        return res.status(400).json (response.invalidInputs);
    }

    let result = Number(num1) / Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000){
        return res.status(404).json (response.underflow);
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000){
        return res.status(404).json (response.Overflow)
    }
    
    if(Number(num2) == 0){
        return res.status(400).json ({
            status: "error",
            message: "Divide by zero"
        })
    }
    

    res.status(200).json({
        status: "Success",
        message: "the division of given numbers",
        result: result
    })

})


 app.get("*", (req, res) => {
    res.status(404).json({
        status: "Failed",
        message: "API NOT FOUND"
    })
})



app.listen(9000, () => console.log("The server is up at port 9000"));





// const express = require('express')
// const app = express()
// const bodyParser = requirebody-parser");
// const port = 3000
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// // your code goes here


// app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;