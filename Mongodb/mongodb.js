const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'
const client =  new MongoClient(url);
const databasename = 'ecommerce';


async function dbconnect() {
    let result = await client.connect();
    db = result.db(databasename);
    return db.collection('products');
}


module.exports = dbconnect; 