const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    /** options.cors untuk CORS pada spesifik routes,
* routes.cors untuk CORS diseluruh routes pada server seperti contoh dibawah */
    // chrome://flags/#block-insecure-private-network-requests agar cors berjalan
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // add route configuration
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
