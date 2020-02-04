const MongoClient = require('mongodb').MongoClient;
const { dbName, dbCollection, dbUrl } = require('./config');
const assert = require('assert')

const client = new MongoClient(dbUrl, {
	useUnifiedTopology: true,
});

let collection;

const connect = () => {
	client.connect(function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to monogoDB server");
		db = client.db(dbName);
		collection = db.collection(dbCollection);
	});
}

const insert = docs => collection.insert(docs);
const insertOne = data => collection.insertOne(data);
const findOne = data => collection.findOne(data);

module.exports = {
	connect,
	insert,
	insertOne,
	findOne
};
