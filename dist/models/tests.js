"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const responseOptionsValues = ['Sin documentar ni implementar', 'Implementado pero no formalizado ni comunicado', 'Implementado, documentado pero requiere mejorar', 'Implementado listo para auditar', 'No aplica'];
const isoTestSchema = new mongoose_1.default.Schema({
    isoType: {
        type: String,
        required: true,
        enum: ['ISO 27001', 'ISO 20000', 'ISO 22301']
    },
    company: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false,
        default: new Date()
    },
    createdBy: {
        type: String,
        required: false,
        default: 'yeyodev'
    },
    questions: [
        {
            clause: {
                type: String,
                required: false,
            },
            questionText: {
                type: String,
                required: true,
            },
            answerOptions: {
                type: [String],
                required: true,
                default: responseOptionsValues,
            },
            correctAnswer: {
                type: String,
                required: false,
            },
        }
    ],
});
exports.default = mongoose_1.default.model('IsoTest', isoTestSchema);
