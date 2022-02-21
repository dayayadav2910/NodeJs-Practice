const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'
const client =  new MongoClient(url);
const database = 'ecommerce';



async function getdata() {
    let results = await client.connect();
    let  db = results.db(database);
    let collection = db.collection('products');
    let response = await collection.find({name:'Mobile'}).toArray();
    console.log(response);
}

getdata()