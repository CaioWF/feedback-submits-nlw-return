import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_API_URL, {
  reconnectionDelayMax: 10000
});

socket.on("connect", () => {
  console.log('connected with id:', socket.id);
});