import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schemas/typeDefs';
import { resolvers } from './schemas/resolvers';
import { environment } from './utils/environment';
import { mongoDbProvider } from './config/mongodb.provider'
const { authMiddleware } = require('./utils/auth');

(async function bootstrapAsync() {
    await
        mongoDbProvider.connectAsync(environment.mongoDb.databaseName);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware,
        introspection: environment.apollo.introspection,
    });

    server
        .listen(environment.port)
        .then((url) => {
            console.log(`Server ready at ${url.url}`)
        });
})();