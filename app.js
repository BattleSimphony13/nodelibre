const http = require('http');

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, mundo!\n');
});

// Escucha en el puerto 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}/`);
});
