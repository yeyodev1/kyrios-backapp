"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastUserTest = exports.createIsoTest = void 0;
const handleErrors_1 = __importDefault(require("../utils/handleErrors"));
const tests_1 = __importDefault(require("../models/tests"));
const users_1 = __importDefault(require("../models/users"));
async function createIsoTest(req, res) {
    try {
        const userId = req.body.id;
        if (!userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }
        const user = await users_1.default.findById(userId);
        if (!user) {
            (0, handleErrors_1.default)(res, 'User not found', 404);
            return;
        }
        const newTest = new tests_1.default(req.body);
        const savedTest = await newTest.save();
        user.tests.push(savedTest._id);
        await user.save();
        res.status(201).json(savedTest);
    }
    catch (error) {
        (0, handleErrors_1.default)(res, 'Error creating ISO test');
    }
}
exports.createIsoTest = createIsoTest;
async function getLastUserTest(req, res) {
    try {
        const userId = req.body.id;
        if (!userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }
        const user = await users_1.default.findById(userId).populate('tests').exec();
        if (!user) {
            (0, handleErrors_1.default)(res, 'User not found', 404);
            return;
        }
        const lastTest = user.tests[user.tests.length - 1];
        if (!lastTest) {
            return res.status(404).json({ message: 'no tests found for this user' });
        }
        res.status(200).json(lastTest);
    }
    catch (error) {
        (0, handleErrors_1.default)(res, 'error retrieving user tests', 500);
    }
}
exports.getLastUserTest = getLastUserTest;
