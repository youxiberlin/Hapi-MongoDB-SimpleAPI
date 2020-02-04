const Hapi = require('@hapi/hapi');
const mongoClient = require('./mongoClient');
const routes = require('./routes');

const registerRoutes = (s, routes) => {
	routes.forEach(route => {
		s.route(route)
	})
}

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
	});
	await registerRoutes(server, routes);
    await server.start();
	console.log('Server running on %s', server.info.uri);
	mongoClient.connect();
};

init();