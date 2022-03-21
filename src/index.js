const {ApolloServer} = require("apollo-server");

const port = 8000;
const server = new ApolloServer();

server.listen({port}, () => 
    console.log(`listening on http://localhost:${port}`))