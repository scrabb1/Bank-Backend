//Requirements
const axios = require('axios');
const express = require('express');
const app = express();
const requestIp = require('request-ip');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 3000

const uri = "mongodb+srv://simoncrabb09:Home8199$@bankcluster.mzvnp.mongodb.net/?retryWrites=true&w=majority&appName=BankCluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

/*
app.post("/account-onboarding", (req, res) => {

})

app.listen(port, () => {
    console.log(`Started the server on ${port}`)
})
*/