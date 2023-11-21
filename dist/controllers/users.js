"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = void 0;
const handleErrors_1 = __importDefault(require("../utils/handleErrors"));
const index_1 = __importDefault(require("../models/index"));
async function getUsers(_req, res) {
    try {
        const users = await index_1.default.users.find({});
        res.send(users);
    }
    catch (error) {
        (0, handleErrors_1.default)(res, 'Cannot get users');
    }
}
exports.getUsers = getUsers;
async function getUser(req, res) {
    try {
        const id = req.body.id;
        const user = await index_1.default.users.findById(id);
        if (!user) {
            (0, handleErrors_1.default)(res, 'Usuario no existe');
            return;
        }
        const data = {
            name: user === null || user === void 0 ? void 0 : user.name,
            lastname: user === null || user === void 0 ? void 0 : user.lastname,
            id: user === null || user === void 0 ? void 0 : user._id,
            email: user.email,
        };
        res.send({ data });
    }
    catch (error) {
        (0, handleErrors_1.default)(res, 'Cannot login');
    }
}
exports.getUser = getUser;
