const dbconnect = require('./mongodb');

const main = async () =>{
    let data = await dbconnect();

    let results = await  data.insert({
        name:'Electronics', brand:'Bajaj', price:'6600'
    })
    console.log(results);
}
main();

