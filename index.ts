import { Server } from "./src/server";

const server = new Server().app;
const port = 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
