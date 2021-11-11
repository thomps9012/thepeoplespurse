import { Collection, Db, MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
import { environment } from './environment';

dotenv.config()

export class MongoDbProvider {
    private database?: Db;
    private mongoClient: MongoClient;

    constructor(url: string) {
        this.mongoClient = new MongoClient(url, 
            );
    }

    get votesCollection(): Collection {
        const votesCollection = this.getCollection('votes');

        if (!votesCollection) {
            throw new Error('Votes collection is undefined');
        }
        return votesCollection;
    }

    get usersCollection(): Collection {
        const usersCollection = this.getCollection('users');
        
        if (!usersCollection) {
            throw new Error('Users collection is undefined');
        }
        return usersCollection;
    }
   
    async connectAsync(databaseName: string): Promise<void> {
        await this.mongoClient.connect();
        this.database = this.mongoClient.db(databaseName);
    }

    async closeAsync(): Promise<void> {
        await this.mongoClient.close();
    }

    private getCollection(collectionName: string): Collection {
        if(!this.database) {
            throw new Error('Database is undefined.');
        }
        return this.database.collection(collectionName);
    }
}

export const mongoDbProvider = new MongoDbProvider(environment.mongoDb.url);