let a =10
let b = 0 
// Updating value of b 
const waitingdata = setTimeout(() => {
    b = 30
}, 2000);


// Using promise updating the value
const waitingdata = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

waitingdata.then((b)=>{
    console.log(a+b);
})


