const mongoClient = require('./mongoClient');
const makeRandomStr = () => Math.random().toString(36).substring(2);

const createData = async (req, h) => {
	const data = {
		id: req.payload.id
	}

	await mongoClient.insertOne(data);

	return data;
};

const readData = async (req, h) => {
	const result = await mongoClient.findOne({ id: req.params.id });

	if (!result) {
		const newData = {
			id: req.params.id,
			text: makeRandomStr(),
		}
		const res = await mongoClient.insertOne(newData);
		return res.ops[0];
	}

	return result;
};

const helloWorld = (req, h) => {
	return 'Hello world';
};

module.exports = {
	createData,
	helloWorld,
	readData,
}
