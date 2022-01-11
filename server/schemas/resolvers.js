"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var graphql_scalars_1 = require("graphql-scalars");
var mongodb_1 = require("mongodb");
var mongodb_provider_1 = require("./mongodb.provider");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var apollo_server_core_1 = require("apollo-server-core");
exports.resolvers = {
    DateTime: graphql_scalars_1.DateTimeResolver,
    Query: {
        getUser: function (obj, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                return [2 /*return*/, mongodb_provider_1.mongoDbProvider.usersCollection.findOne({ _id: new mongodb_1.ObjectId(id) })];
            }); });
        },
        getTeacher: function (obj, _a) {
            var id = _a.id;
            return mongodb_provider_1.mongoDbProvider.teachersCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
        },
        allUsers: function () {
            return mongodb_provider_1.mongoDbProvider.usersCollection.find({}).toArray();
        },
        classVotes: function (obj, _a) {
            var classID = _a.classID;
            return mongodb_provider_1.mongoDbProvider.votesCollection.find({ class: new mongodb_1.ObjectId(classID) }).toArray();
        },
        allVotes: function (obj) {
            return mongodb_provider_1.mongoDbProvider.votesCollection.find({}).toArray();
        },
        classInfo: function (obj, _a) {
            var classID = _a.classID;
            return mongodb_provider_1.mongoDbProvider.classesCollection.findOne({ _id: new mongodb_1.ObjectId(classID) });
        },
        classes: function (obj, _a) {
            var teacherID = _a.teacherID;
            return mongodb_provider_1.mongoDbProvider.classesCollection.find({ teacher: new mongodb_1.ObjectId(teacherID) }).toArray();
        },
        actions: function (obj, _a) {
            var userID = _a.userID;
            return mongodb_provider_1.mongoDbProvider.usersCollection.findOne({ _id: new mongodb_1.ObjectId(userID) });
        }
    },
    Mutation: {
        signUp: function (obj, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var result, _b, _c, _d, user, updatedClass, token, data;
                var _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _c = (_b = mongodb_provider_1.mongoDbProvider.usersCollection).insertOne;
                            _e = {
                                email: input.email,
                                username: input.username
                            };
                            if (!input.password) return [3 /*break*/, 2];
                            return [4 /*yield*/, bcrypt_1.default.hash(input.password, 10)];
                        case 1:
                            _d = _f.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _d = '';
                            _f.label = 3;
                        case 3: return [4 /*yield*/, _c.apply(_b, [(_e.password = _d,
                                    _e.classCode = input.classCode,
                                    _e.actions = [],
                                    _e)])];
                        case 4:
                            result = _f.sent();
                            return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.usersCollection.findOne({
                                    email: input.email
                                })];
                        case 5:
                            user = _f.sent();
                            console.log(user);
                            if (!input.classCode) return [3 /*break*/, 7];
                            return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.classesCollection.updateOne({ classCode: input.classCode }, {
                                    $addToSet: {
                                        users: result.insertedId
                                    }
                                })];
                        case 6:
                            updatedClass = _f.sent();
                            console.log(updatedClass);
                            _f.label = 7;
                        case 7:
                            token = jsonwebtoken_1.default.sign(
                            // will change on PRODUCTION
                            { "https://localhost:4200/": {} }, "f1BtnWgD3VKY", { algorithm: "HS256", subject: input.username ? input.username : '', expiresIn: "1d" });
                            data = { token: token, user: user };
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        teacherSignUp: function (obj, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var result, _b, _c, _d, teacher, token, data;
                var _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _c = (_b = mongodb_provider_1.mongoDbProvider.teachersCollection).insertOne;
                            _e = {
                                email: input.email,
                                username: input.username
                            };
                            if (!input.password) return [3 /*break*/, 2];
                            return [4 /*yield*/, bcrypt_1.default.hash(input.password, 10)];
                        case 1:
                            _d = _f.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _d = '';
                            _f.label = 3;
                        case 3: return [4 /*yield*/, _c.apply(_b, [(_e.password = _d,
                                    _e.classes = [],
                                    _e)])];
                        case 4:
                            result = _f.sent();
                            return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.teachersCollection.findOne({
                                    email: input.email
                                })];
                        case 5:
                            teacher = _f.sent();
                            token = jsonwebtoken_1.default.sign(
                            // will change on PRODUCTION
                            { "https://localhost:4200/": {} }, "f1BtnWgD3VKY", { algorithm: "HS256", subject: input.username ? input.username : '', expiresIn: "1d" });
                            data = { token: token, teacher: teacher };
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        login: function (obj, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var user, correctPw, _b, token, data;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.usersCollection.findOne({
                                email: input.email,
                            })];
                        case 1:
                            user = _c.sent();
                            if (!input.password) return [3 /*break*/, 3];
                            return [4 /*yield*/, bcrypt_1.default.compare(input.password, user === null || user === void 0 ? void 0 : user.password)];
                        case 2:
                            _b = _c.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _b = '';
                            _c.label = 4;
                        case 4:
                            correctPw = _b;
                            if (!correctPw) {
                                throw new apollo_server_core_1.AuthenticationError('Incorrect Password');
                            }
                            token = jsonwebtoken_1.default.sign(
                            // will change on PRODUCTION
                            { "https://localhost:4000/": {} }, "f1BtnWgD3VKY", { algorithm: "HS256", subject: user === null || user === void 0 ? void 0 : user.username, expiresIn: "1d" });
                            data = { token: token, user: user };
                            console.log(data);
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        teacherLogin: function (obj, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var teacher, correctPw, _b, token, data;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.teachersCollection.findOne({
                                email: input.email,
                            })];
                        case 1:
                            teacher = _c.sent();
                            if (!input.password) return [3 /*break*/, 3];
                            return [4 /*yield*/, bcrypt_1.default.compare(input.password, teacher === null || teacher === void 0 ? void 0 : teacher.password)];
                        case 2:
                            _b = _c.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _b = '';
                            _c.label = 4;
                        case 4:
                            correctPw = _b;
                            if (!correctPw) {
                                throw new apollo_server_core_1.AuthenticationError('Incorrect Password');
                            }
                            token = jsonwebtoken_1.default.sign(
                            // will change on PRODUCTION
                            { "https://localhost:4000/": {} }, "f1BtnWgD3VKY", { algorithm: "HS256", subject: teacher === null || teacher === void 0 ? void 0 : teacher.username, expiresIn: "1d" });
                            data = { token: token, teacher: teacher };
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        castVote: function (obj, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var vote, updatedClass, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 4, , 5]);
                            return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.votesCollection.insertOne({
                                    voter: new mongodb_1.ObjectId(input.voter),
                                    classCode: input.classCode,
                                    budget: input.budget,
                                    createdAt: new Date()
                                })];
                        case 1:
                            vote = _c.sent();
                            if (!(input.classCode != null)) return [3 /*break*/, 3];
                            return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.classesCollection.updateOne({ classCode: input.classCode }, {
                                    $addToSet: {
                                        votes: vote.insertedId
                                    }
                                })];
                        case 2:
                            updatedClass = _c.sent();
                            _c.label = 3;
                        case 3: return [2 /*return*/, vote.insertedId];
                        case 4:
                            _b = _c.sent();
                            console.log('Invalid Token');
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        },
        takeAction: function (obj, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var result, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.usersCollection.updateOne({ _id: new mongodb_1.ObjectId(input.userID) }, {
                                    $addToSet: {
                                        actions: {
                                            name: input.name,
                                            detail: input.detail,
                                            organization: input.organization,
                                            length: input.length,
                                            actionDate: input.actionDate
                                        }
                                    },
                                }, { upsert: true })];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.upsertedId];
                        case 2:
                            _b = _c.sent();
                            console.log('Invalid Token');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        createClass: function (obj, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var createdClass, updatedTeacher, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.classesCollection.insertOne({
                                    teacher: new mongodb_1.ObjectId(input.teacher),
                                    classCode: input.classCode,
                                    users: [],
                                    votes: [],
                                    createdAt: new Date()
                                })];
                        case 1:
                            createdClass = _c.sent();
                            return [4 /*yield*/, mongodb_provider_1.mongoDbProvider.teachersCollection.updateOne({ _id: new mongodb_1.ObjectId(input.teacher) }, {
                                    $addToSet: {
                                        classes: createdClass.insertedId
                                    }
                                }, { upsert: true })];
                        case 2:
                            updatedTeacher = _c.sent();
                            return [2 /*return*/, createdClass.insertedId];
                        case 3:
                            _b = _c.sent();
                            console.log('Invalid Token');
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
    },
    User: {
        id: function (obj) {
            return obj._id
                ? obj._id.toString()
                : obj.id;
        }
    },
    Teacher: {
        id: function (obj) {
            return obj._id
                ? obj._id.toString()
                : obj.id;
        }
    },
    Class: {
        id: function (obj) {
            return obj._id
                ? obj._id.toString()
                : obj.id;
        }
    },
    Vote: {
        id: function (obj) {
            return obj._id
                ? obj._id.toString()
                : obj.id;
        },
    }
};
