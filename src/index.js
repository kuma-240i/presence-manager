require('dotenv').config();
const { setupExpressServer } = require("./server");

const server = setupExpressServer();
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});
