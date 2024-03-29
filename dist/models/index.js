"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./users"));
const tests_1 = __importDefault(require("./tests"));
const models = {
    users: users_1.default,
    tests: tests_1.default
};
exports.default = models;
