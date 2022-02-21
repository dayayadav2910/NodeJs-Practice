const dbconnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbconnect();
    let result = await data.updateOne(
        {name:'Electronics'}
        ,{$set:  {price: '8000'}});
    console.log(result);
}
updateData()