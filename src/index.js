const {ApolloServer} = require("apollo-server");
const {typeDefs} = require('./schema/schema');
const {resolvers} = require('./resolvers/resolvers')

const port = 8000;
console.log(resolvers)
const server = new ApolloServer({resolvers, typeDefs});


server.listen({port}, () => 
    console.log(`listening on http://localhost:${port}`))