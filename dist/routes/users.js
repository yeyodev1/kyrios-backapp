"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const handleBearer_1 = require("../middlewares/handleBearer");
const router = express_1.default.Router();
router.get('/users', users_1.getUsers);
router.get('/users/profile', handleBearer_1.authenticateToken, users_1.getUser);
exports.default = router;
