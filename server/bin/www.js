// const app = require('../app');
// const debug = require('debug')('server:server');
// const http = require('http');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');

// dotenv.config();

// process.env.NODE_ENV = process.argv[2].split("=")[1];
// /**
//  * Get port from environment and store in Express.
//  */

// const port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */

// const server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// const DB =
//   process.env.NODE_ENV === "DEV"
//     ? process.env.DATABASE_DEV.replace(
//         "<password>",
//         process.env.DATABASE_DEV_PASSWORD
//       )
//     : process.env.DATABASE_PROD.replace(
//         "<password>",
//         process.env.DATABASE_PROD_PASSWORD
//     );
      
// mongoose.connect(DB).then(() => {
//   server.listen(port);
//   server.on('error', onError);
//   server.on('listening', onListening);
//   console.log(`mongodb connected`)
// }).catch(err => {
//   console.log(err);
//   process.exit(1);
// });



// /**
//  * Normalize a port into a number, string, or false.
//  */

// function normalizePort(val) {
//   const port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// }

// /**
//  * Event listener for HTTP server "error" event.
//  */

// function onError(error) {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }

//   const bind = typeof port === 'string'
//     ? 'Pipe ' + port
//     : 'Port ' + port;

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */

// function onListening() {
//   const addr = server.address();
//   const bind = typeof addr === 'string'
//     ? 'pipe ' + addr
//     : 'port ' + addr.port;
//   debug('Listening on ' + bind);
// }




const app = require('../app');
const debug = require('debug')('server:server');
const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();


/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

mongoose.connect(process.env.MONGODB_URL).then(() => {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
  // console.log(`mongodb connected ${process.env.MONGODB_URL}`)
}).catch(err => {
  // console.log(err);
  process.exit(1);
});



/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}