import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from "socket.io";
import { routes } from './routes';

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

io.on("connection", (socket: Socket) => {
  console.log("Client connected with id:", socket.id);
});

app.use(cors());
app.use(express.json({limit: '5mb'}));
app.use(routes)

export { httpServer, io };
