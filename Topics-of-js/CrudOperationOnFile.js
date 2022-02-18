const fs = require('fs');
const path = require('path');
const fullpath = path.join(__dirname,'CRUD');
const fullpathf = `${fullpath}/apple.txt`
    
// Update File
fs.appendFileSync(fullpathf,"Daya Yadav created this file \n", (error)=>{
    if(!error) console.log("Apend is done");
})

//  Rename File Name

fs.rename(fullpathf,`${fullpath}/fruits.txt`,(error) =>{
    if(!error){
        console.log("File Is renamed")
    };
})

// Delete file
fs.unlinkSync(`${fullpath}/fruits.txt`);
