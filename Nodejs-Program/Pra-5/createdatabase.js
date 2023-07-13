const { MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function createNewDatabase(dbName) {
  try {
    await client.connect().then(() => console.log("Connected With Server")).catch(err => console.log("Unable to connect"));
    var db = client.db(dbName);
    // var collection = db.createCollection('employeeCollection');
    console.log(`Created new database '${dbName}'`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

// createNewDatabase('Employee').then(() => console.log("Database Created")).catch(err => console.log("Unable to Create Database"));


//----------------------------------------------Insert data-----------------------------------------------------------
async function insertData(dbName, collectionName) {

  // ---------------------------------------------------------------------
  //establish the connection with MongoDB database
  await client.connect().then(() => console.log("Again Connected")).catch(err => console.log("Unable to connect to database"));

  //We take database reference 
  const myDB = client.db(dbName);
  /* we cannot use here createCollection() because it create only one time collection if second time same code 
  we run then give error So we us collection().
  -->if collection is not created then automatically collection() can create collection*/

  const myColl = myDB.collection(collectionName);

  try {
    const data = [
      { name: 'Vasu', age: 20 },
      { name: 'Ashneer', age: 30 },
      { name: 'Piyush', age: 40 },
      { name: 'Tata', age: 85 }
    ];

    const insertManyresult = await myColl.insertMany(data);
    let ids = insertManyresult.insertedIds;
    console.log(`${insertManyresult.insertedCount} documents were inserted.`); //count the number of inserted document
    for (let id of Object.values(ids)) {
      console.log(`Inserted a document with id ${id}`);
    }
  } catch (e) {
    console.log(e);
    // console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);

    let ids = e.result.result.insertedIds;
    for (let id of Object.values(ids)) {
      console.log(`Processed a document with id ${id._id}`);
    }
    console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
  } finally {
    await client.close();
  }
}

//------------------------------------------------------------

// if(db.listDatabases().indexOf(dbName) == -1){
// try {
//   await client.connect().then(()=> console.log("Connected")).catch(er=> console.log("Unable to connect to database"));
//   var db = client.db(dbName);
//   var collection = db.collection(collectionName);
//   console.log(`Created new database '${dbName}'`);
//   console.log(`Created new collectnodeion '${collectionName}'`);


//   // var databasename = db.toString;
//   // var collectionname = collection.toString();

//   //insert 
// const result =await client.db(dbName).collection(collectionName).insertOne({ name: 'Alice', age: 366 });
// console.log(`Inserted data into collection '${collectionName}' in database '${dbName}'`);

// const result1 =await client.db(dbName).collection(collectionName).insertOne({ name: 'Vasu', age: 20 });
// console.log(`Inserted data into collection '${collectionName}' in database '${dbName}'`);

// const result3 =await client.db(dbName).collection(collectionName).insertOne({ name: 'dfdf', age: 10 });
// console.log(`Inserted data into collection '${collectionName}' in database '${dbName}'`);

// //update

// // const filter = { name: 'Alice' };
// // const update = { $set: { age: 35 } };

// // const result2 = await collection.updateOne({ name: "Alice" }, { $set: { age: 35 } });
// // console.log(`${result2.modifiedCount} document(s) updated`);


// } catch (err) {
//   console.error(err);
// } finally {
//   await client.close();
// }


// else {
//   const result5 = await collection.insertOne({ name: 'Alice', age: 30 });
//   console.log(`Inserted data into collection '${collectionName}' in database '${dbName}'`);
// }
// }

// insertData('Employee', 'employeeCollection').then(() => console.log("Inserted")).catch(err => console.log("Unable to Insert"));

//-------------------------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------Update data-----------------------------------------------------------


async function updateData(dbName, collectionName) {

  //   // ---------------------------------------------------------------------
  //establish the connection with MongoDB database
  try {
    await client.connect().then(() => console.log("Again Again Connected")).catch(err => console.log("Unable to connect to database"));

    const myDB = client.db(dbName);
    const myColl = myDB.collection(collectionName);
    const filter = { name: 'Vasu' };
    // update the value of the 'quantity' field to 5
    const updateDocument = {
      $set: { age: 16 },
    };
    const result = await myColl.updateOne(filter, updateDocument);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

// //------------------------------------------------------------

// updateData('Employee', 'employeeCollection').then(() => console.log("Updated")).catch(err => console.log("Unable to Update"));


//----------------------------------------------Delete data-----------------------------------------------------------

async function deleteData(dbName, collectionName) {

  //   // ---------------------------------------------------------------------
  //establish the connection with MongoDB database
  try {
    await client.connect().then(() => console.log("Again Again Again Connected")).catch(err => console.log("Unable to connect to database"));

    const myDB = client.db(dbName);
    const myColl = myDB.collection(collectionName);
    
    const deleteData = { name: 'Vasu', age: 16 };   

    const result = await myColl.deleteOne(deleteData);   //deleteOne() take parameter as Object like JSON, javascript object
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

// deleteData('Employee', 'employeeCollection').then(() => console.log("Deleted")).catch(err => console.log("Unable to Update"));




// createNewDatabase('Employee').then(() => console.log("Database Created")).catch(err => console.log("Unable to Create Database"));
// insertData('Employee', 'employeeCollection').then(() => console.log("Inserted")).catch(err => console.log("Unable to Insert"));
// updateData('Employee', 'employeeCollection').then(() => console.log("Updated")).catch(err => console.log("Unable to Update"));
// deleteData('Employee', 'employeeCollection').then(() => console.log("Deleted")).catch(err => console.log("Unable to Update"));
