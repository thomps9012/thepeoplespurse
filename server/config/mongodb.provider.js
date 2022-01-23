"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDbProvider = exports.MongoDbProvider = void 0;
const mongodb_1 = require("mongodb");
const dotenv = __importStar(require("dotenv"));
const environment_1 = require("../utils/environment");
dotenv.config();
class MongoDbProvider {
    constructor(url) {
        this.mongoClient = new mongodb_1.MongoClient(url);
    }
    // get votesCollection(): Collection {
    //     const votesCollection = this.getCollection('votes');
    //     if (!votesCollection) {
    //         throw new Error('Votes collection is undefined');
    //     }
    //     return votesCollection;
    // }
    get classesCollection() {
        const classesCollection = this.getCollection('classes');
        if (!classesCollection) {
            throw new Error('Classes collection is undefined');
        }
        return classesCollection;
    }
    get usersCollection() {
        const usersCollection = this.getCollection('users');
        if (!usersCollection) {
            throw new Error('Users collection is undefined');
        }
        return usersCollection;
    }
    get actionsCollection() {
        const actionsCollection = this.getCollection('actions');
        if (!actionsCollection) {
            throw new Error('Actions collection is undefined');
        }
        return actionsCollection;
    }
    async connectAsync(databaseName) {
        await this.mongoClient.connect();
        this.database = this.mongoClient.db(databaseName);
    }
    async closeAsync() {
        await this.mongoClient.close();
    }
    getCollection(collectionName) {
        if (!this.database) {
            throw new Error('Database is undefined.');
        }
        return this.database.collection(collectionName);
    }
}
exports.MongoDbProvider = MongoDbProvider;
exports.mongoDbProvider = new MongoDbProvider(environment_1.environment.mongoDb.url);
