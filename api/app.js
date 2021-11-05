const express = require("express");
var cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
app.set("trust proxy", true);

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://OrangeDriver:Password@kaydontest.fzf19.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function main() {
    await client.connect();
    const db = client.db("training")
    try {
        let Path = { src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
        console.log("creating vidoe link")
        createVideoSource
        await client.close();
    }
    catch (err) {
        console.log(err)
    } finally {
    }
}

async function createVideoSource(db, path) {
    console.log("creating vidoe link")
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne for the insertOne() docs
    const result = db.collection("Videos").insertOne(path);
    console.log(result)
    console.log(`New training source created with the following id: ${result.insertId}`);
}

app.get("/", (req, res) => {
    console.log("/ was accessed");
    console.info("/ accessed")
    console.info("request Host: " + req.hostname)
    console.info("requester IP is :" + req.ip)
    console.info("User-Agent: " + req.headers["user-agent"])
    res.send("Well Howdy Duty Partner");
});

app.get("/addSrc",(req, res)=>{
    main();
})

app.listen(port, () => {
    console.info('training API Started on port:' + port)
});