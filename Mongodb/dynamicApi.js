// Dynamic API 

const express = require("express");
const dbconnect = require("./mongodb");
const app = express();


// Middleware:=> when getting data from postman 
app.use(express.json());

// Get the data using get method....
app.get('/',  async(req,resp)=>{
    let data =  await dbconnect();
    data = await data.find().toArray();
    resp.send(data);
});

// Insert Data in db using post method....
app.post('/', async (req,resp)=>{
    let data = await dbconnect();
    let result = await data.insert(req.body);
    resp.send(result);
});

// Update Data using put method....
app.put('/', async (req,resp)=>{
    let data = await dbconnect();
    let result =  await data.updateOne(
        {name:req.body.name},
        {$set : req.body})
    resp.send(result);


})
app.listen(5000);
