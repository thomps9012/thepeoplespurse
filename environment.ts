import * as dotenv from 'dotenv';

const defaultPort = 4201;
dotenv.config()

interface Environment {
    apollo: {
        introspection: boolean;
        playground: boolean;
    };
    mongoDb: {
        databaseName: string;
        url: string;
    };
    port: number | string;
}

export const environment: Environment = {
    apollo: {
        introspection: process.env.APOLLO_INTROSPECTION === 'true',
        playground: process.env.APOLLO_PLAYGROUND === 'true',
    },
    mongoDb: {
        databaseName: process.env.MONGODB_DB_NAME as string,
        url: process.env.ATLAS_URL as string,
    },
    port: process.env.PORT || defaultPort
}