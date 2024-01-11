"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const isoTestSchema = new mongoose_1.default.Schema({
    isoType: {
        type: String,
        required: true,
        enum: ['ISO 27001', 'ISO 20000', 'ISO 22301']
    },
    company: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    questions: [
        {
            clause: String,
            questionText: String,
            answerOptions: [String],
            correctAnswer: String
        }
    ]
});
exports.default = mongoose_1.default.model('IsoTest', isoTestSchema);
