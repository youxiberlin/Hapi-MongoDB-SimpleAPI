const dbName = 'project1';
const dbCollection = 'collection1';
const mongoID = '';
const mongoPass = '';
const dbUrl = `mongodb+srv://${mongoID}:${mongoPass}@cluster0-xzvas.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
	dbName,
	dbCollection,
	dbUrl,
}