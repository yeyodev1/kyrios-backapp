"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tests_1 = require("../controllers/tests");
const handleBearer_1 = require("../middlewares/handleBearer");
const router = express_1.default.Router();
router.post('/isotest/create', handleBearer_1.authenticateToken, tests_1.createIsoTest);
router.get('/isotest/lastTest/:userId', handleBearer_1.authenticateToken, tests_1.getLastUserTest);
router.put('/isotest/testAccessLevel', handleBearer_1.authenticateToken, tests_1.setUserTestAccessLevel);
exports.default = router;
