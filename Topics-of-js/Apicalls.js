// Static API

let express = require('express');
let app = express();

app.get('',(req,resp)=>{
    console.log(req.query.name);
    resp.send(`Hello ${req.query.name} <a href="/about">Go to about page</a>`);

})


app.get('/about',(req,resp)=>{
    resp.send(`<h1>Hello This is About Page</h1>
    <input type="text" value= ${req.query.name} /> <button>Click Here</button>
    `);
})

app.get('/help',(req,resp)=>{
    resp.send("Hello This is Help Page");
})

app.listen(5000)



// using Templete engine(EJS)
let express = require('express');
let path  = require('path');
let fullpath = path.join(__dirname,'views');
const app = express();

app.set('view engine','ejs');

// console.log(fullpath);
// app.use(express.static(fullpath));

app.get('',(req,res)=>{
    res.sendFile(`${fullpath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${fullpath}/about.html`)
})
app.get('/help',(req,res)=>{
    res.sendFile(`${fullpath}/help.html`)
})
//  data sending to the pages
app.get('/profile',(req,res)=>{
    const arr1 = {
        name: 'Daya',
        email : 'dayayadav3593@gmail.com'
    }
    const arr = [{
        name: 'Daya',
        mobile: '7987879879',
        area: 'Cg road'
    },{
        name: 'Kiran',
        mobile: '7987879879',
        area: 'Manek Chowk'
    },
    {
        name: 'Prakriti',
        mobile: '7987879879',   
        area: 'Manek Chowk'
    }]
    res.render('profile', {arr,arr1})
})

app.get('*',(req,res)=>{
    res.sendFile(`${fullpath}/notfound.html`)
})

app.listen(5000);


// page restriction using query param........
// API modification using Middleware.......
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