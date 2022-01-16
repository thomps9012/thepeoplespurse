"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const Class_1 = __importDefault(require("./Class"));
const Vote_1 = __importDefault(require("./Vote"));
const Action_1 = __importDefault(require("./Action"));
exports.default = module.exports = { User: User_1.default, Class: Class_1.default, Vote: Vote_1.default, Action: Action_1.default };
