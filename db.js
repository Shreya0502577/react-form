// JavaScript source code
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});
/*var MongoClient = require('mongodb').MongoClient;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});*/
/*var express= require('express')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Shreya", lastname: "Sharma" };
    dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

const app = express()

app.use(express.json())
var database
app.get('/', (req, resp) => {
    resp.send("mongodb api")

});
app.listen(8080, () => {
    MongoClient.connect('mongodb://localhost:2707', { userNewUrlParser: true }, (error, result) => {
        if (error) throw error
        database=result.db('mydb')
    })

})*/


