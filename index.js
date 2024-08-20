//Requirements
const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
const host = 'http://127.0.0.1:' + port;

app.listen(port, () => {
  console.log(`Started the server on ${port}`);
})


const uri = "mongodb+srv://simoncrabb09:Home8199$@bankcluster.mzvnp.mongodb.net/?retryWrites=true&w=majority&appName=BankCluster";

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

async function connect() {

  
  try {
    const conn = await client.connect();

    const dbName = "Bank";
    const collectionName = "Accounts";
  
    const database = await client.db(dbName);
    const collection = await database.collection(collectionName);
    
    const result = await collection.find({"Balance":100}).toArray();
    return result;
  }catch(err) {console.log(err)};
  return;
}

async function accountLookup(username, password) {
  try {
    const MongoConnection = await client.connect();

    const dbName = "Bank";
    const collectionName = "Accounts";
  
    const database = await client.db(dbName);
    const collection = await database.collection(collectionName);
    
    const userQuery = await collection.find({"Username":username})//.toArray();
    return result;
  }catch(err) {console.log(err)};
  return;
}


function loginAttempt(username, password) {
  console.log(`Login attempt: ${username};${password}`);
}

app.get('/test', async (req,res)=>{

  const connection = await connect();
  res.status(200).json(connection);

})


app.post('/account-query', async (req,res)=>{

  app.use(express.json())

  const data = req.body

  if (data.username && data.password) {
    res.status(201).json({status:"success"})
  }
  
})

