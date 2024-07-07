import { createServer } from 'https';
import { readFileSync } from 'fs';
import { WebSocketServer } from 'ws';

const server = createServer({
  cert: readFileSync('/etc/letsencrypt/live/des221.net/fullchain.pem'),
  key: readFileSync('/etc/letsencrypt/live/des221.net/privkey.pem')
});
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws, req) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
  
  const ip = req.socket.remoteAddress;
  console.log(`Connection from ${ip}`);
  ws.send(`Connected to ${ip}`);
});

server.listen(8080);