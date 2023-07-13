const mongodb = require('mongodb');


// Connection URL
const url = "mongodb://127.0.0.1:27017/";
// MongoClient.connect(url).then(()=> console.log("Database Created")).catch(err=> console.log("error ocurred "))
const MongoClient = new mongodb.MongoClient(url, { useNewUrlParser: true })

// MongoClient.connect((error, client) => {
//     console.log('Connected correctly')
// }).then(()=> console.log("Connected correctly")).catch(err=> console.log("Unable to connect to database"));

// Database Name
const dbName = 'temp';

async function main() {
  // Use connect method to connect to the server
  await MongoClient.connect();
  console.log('Connected successfully to server');
  const db = MongoClient.db(dbName);
  const collection = db.createCollection('user')
  .then(() => console.log('Create Collection'))
  .catch(err => console.error('Could not create collection', err));

  // the following code examples can be pasted here...

  const insertResult = await collection.insertOne({ name: 'Alice', age: 30 });
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(()=>MongoClient.close());
