"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs_1 = require("./schemas/typeDefs");
const resolvers_1 = require("./schemas/resolvers");
const environment_1 = require("./utils/environment");
const mongodb_provider_1 = require("./config/mongodb.provider");
const { authMiddleware } = require('./utils/auth');
(async function bootstrapAsync() {
    await mongodb_provider_1.mongoDbProvider.connectAsync(environment_1.environment.mongoDb.databaseName);
    const server = new apollo_server_1.ApolloServer({
        typeDefs: typeDefs_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        context: authMiddleware,
        introspection: environment_1.environment.apollo.introspection,
    });
    server
        .listen(environment_1.environment.port)
        .then((url) => {
        console.log(`Server ready at ${url.url}`);
    });
})();
