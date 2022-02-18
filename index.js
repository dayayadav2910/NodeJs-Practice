const express = require('express')
const app = express();

const filerApi = (req,res,next) =>{
    if(!req.query.age){
        res.send("Please enter your age");

    }
    else if(req.query.age<18){
        res.send("You are not allowed to open this site")
    }
    else{
        next();
    }
}

app.use(filerApi)

app.get('/',(req,res)=>{
    res.send("You are in home");
})
app.get('/user',(req,res)=>{
    res.send("You are in user page");
})





app.listen(5000);