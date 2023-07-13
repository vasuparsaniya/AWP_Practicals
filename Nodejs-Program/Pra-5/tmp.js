const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/mydatabase';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  const collection = db.collection('mycollection');

  // CREATE operation
  const newDocument = { name: 'John Doe', age: 35 };
  collection.insertOne(newDocument, function(err, result) {
    if (err) throw err;
    console.log('New document inserted:', result.ops[0]);
  });

  // READ operation
  const query = { name: 'John Doe' };
  collection.find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log('Documents found:', result);
  });

  // UPDATE operation
  const filter = { name: 'John Doe' };
  const update = { $set: { age: 36 } };
  collection.updateOne(filter, update, function(err, result) {
    if (err) throw err;
    console.log('Document updated:', result.result);
  });

  // DELETE operation
  const deleteQuery = { name: 'John Doe' };
  collection.deleteOne(deleteQuery, function(err, result) {
    if (err) throw err;
    console.log('Document deleted:', result.result);
  });

  db.close();
});

