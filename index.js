const server = require ('./api/server.js');

const port = 5001;
server.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});