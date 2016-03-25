'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _socket3 = require('socket.io-redis');

var _socket4 = _interopRequireDefault(_socket3);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _lib = require('./lib');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var io = (0, _socket2.default)(server);
var port = process.env.PORT || 3000;

_mongoose2.default.connect(_config2.default.mongodb.uri || 'mongodb://localhost/tvify');

app.use(_express2.default.static('public'));
app.use('/api', _api2.default);

io.adapter((0, _socket4.default)({ host: 'localhost', port: 6379 }));

io.on('connection', function (socket) {
  console.log('Connected ' + socket.id + ' on instance ' + port);

  socket.on('vote', function (id) {
    (0, _lib.incrementVote)(id, function (err, vote) {
      if (err) return socket.emit('vote:error', err);

      socket.emit('vote', vote);
    });
  });

  socket.on('join', function (room) {
    socket.room = room;
    socket.join(room);
  });

  socket.on('message', function (msg) {
    socket.broadcast.to(socket.room).emit('message', msg);
  });
});

server.listen(port, function () {
  return console.log('Server listening on port ' + port);
});