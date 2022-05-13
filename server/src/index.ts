import { httpServer } from "./app";

const PORT = process.env.PORT || 3333;

httpServer.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
