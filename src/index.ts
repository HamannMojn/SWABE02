import { ApolloServer } from "apollo-server";
import { makeSchema } from "nexus";
import { join } from "path";
import DbContext from "../prisma/DbContext";
import * as types from './schema/schema';


const port = 8000;

const server = new ApolloServer({
    schema: makeSchema({
        types,
        outputs: {
            typegen: join(__dirname, '..', 'nexus-typegen.ts'),
            schema: join(__dirname, '..', 'schema.graphql'),
        },
        contextType: {
            module: join(__dirname, "context.ts"),
            export: "Context",
        },
    }),
    context() {
        return {
            db: DbContext
        };
    },
});


server.listen({port}, () => 
    console.log(`listening on http://localhost:${port}`))