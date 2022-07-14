require("dotenv").config()
const { MongoClient } = require('mongodb')
const connectionUrl = process.env.DB_CONNECTION;
// const connectionUrl = process.env.MONGODB_URI

const dbName = process.env.DB_NAME

const init = async () => {
  // let client = await MongoClient.connect(connectionUrl)
  const client = new MongoClient(connectionUrl);
  await client.connect()
  console.log('connected to database!', dbName)
  return client.db(dbName)
}


module.exports = { init };


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGODB_URI
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// module.exports = { init };
