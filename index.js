const Hapi = require('hapi');

const server = new Hapi.Server
(
    {
        port: 3000,
        host: 'localhost'
    }
);

server.route
(
    {
        method: 'GET',
        path: '/stitch',
        handler: (request, h) => 
        {
            return '<h1>Hola desde la ruta http://localhost/stitch</h1><img src="https://media1.tenor.com/images/00b03fa056a81422d8562bc828d9d7d8/tenor.gif?itemid=12599166"></img>';
        }
    }
);

async function startServer() 
{
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

startServer();