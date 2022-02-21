const express =  require("express");
const mongoos =  require("mongoose");
const app = express();



const main = async () =>{

    await mongoos.connect('mongodb://localhost:27017/ecommerce');
    const productschema =  new mongoos.Schema({
        name: String,
        price : Number
    });

    const productmodel = mongoos.model('products',productschema);
    let data =  new productmodel({name: "DayaKiran", price: 500});
    let result =  await data.save();
    console.log(result);
}


main();