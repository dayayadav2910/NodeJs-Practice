const fs = require('fs');
const path = require('path');
const fullpath = path.join(__dirname,'DynamicFiles');

// Creating files using array.....
for(i=0;i<5;i++){
    fs.writeFileSync(fullpath+`/hello${i}.txt`, `Hello World you are in file....  I am Just Born ` )
}
// List file using array......
fs.readdir(fullpath,(err,files)=>{
    files.forEach((element) => {
        console.log(element);
    })
});