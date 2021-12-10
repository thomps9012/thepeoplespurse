import { ApolloServer } from 'apollo-server';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb'
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { environment } from './environment';
import { mongoDbProvider } from './mongodb.provider'

(async function bootstrapAsync(): Promise<void> {
    await
        mongoDbProvider.connectAsync(environment.mongoDb.databaseName);
    const server = new ApolloServer({
        typeDefs: [DIRECTIVES, typeDefs],
        resolvers,
        introspection: environment.apollo.introspection,
    });

    server
        .listen(environment.port)
        .then((url: any) => {
            console.log(`Server ready at ${url.url}`)
        });
})();