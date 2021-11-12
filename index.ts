const { ApolloServer } = require('apollo-server');
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb'
import * as dotenv from 'dotenv';
import typeDefs from './typeDefs';
import { resolvers } from './resolvers';
import { environment } from './environment';
import { mongoDbProvider } from './mongodb.provider'

dotenv.config();

(async function bootstrapAsync(): Promise<void> {
    await
        mongoDbProvider.connectAsync(environment.mongoDb.databaseName);
    const server = new ApolloServer({
        typeDefs: [DIRECTIVES, typeDefs],
        resolvers,
        introspection: environment.apollo.introspection,
        playground: environment.apollo.playground,
        context: ({req}: any) => {
            const token = req.headers.authorization;
            console.log(token)
            return { token };
        }
    });

    server
        .listen(environment.port)
        .then((url: any) => {
            console.log(`Server running at http://localhost:${JSON.stringify(url.port)}${server.graphqlPath}`);
        });
})();

