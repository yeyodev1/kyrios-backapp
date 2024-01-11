"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./auth"));
const users_1 = __importDefault(require("./users"));
const tests_1 = __importDefault(require("./tests"));
function routerApi(app) {
    const router = express_1.default.Router();
    app.use('/api', router);
    router.use(users_1.default);
    router.use(auth_1.default);
    router.use(tests_1.default);
}
exports.default = routerApi;
