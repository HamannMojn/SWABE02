const {ApolloServer} = require("apollo-server");
const {typeDefs, resolvers} = require('./schema/schema')

const port = 8000;
const server = new ApolloServer({resolvers, typeDefs});

server.listen({port}, () => 
    console.log(`listening on http://localhost:${port}`))