const { helloWorld, createData, readData } = require('./handlers');

const routes = [
	{
        method: 'GET',
		path: '/',
		handler: helloWorld,
	},
	{
        method: 'GET',
		path: '/data/{id}',
		handler: readData,
	},
	{
        method: 'POST',
		path: '/data',
		handler: createData,
    }
]

module.exports = routes;
