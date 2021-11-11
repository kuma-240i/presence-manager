const { setupExpressServer } = require("./server");

const server = setupExpressServer();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});
