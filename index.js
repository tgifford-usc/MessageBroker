import { WebSocketServer } from 'ws';

let OpenPorts = new Map();

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('This is DES221 speaking');
});
