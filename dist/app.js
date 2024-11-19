"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_route_1 = require("./app/modules/student/student.route");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/students', student_route_1.studentRouter);
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>try-mongoose</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        h1 {
            color: #333;
        }
        p {
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Mongoose Server </h1>
    <p>run on 5000</p>
</body>
</html>
    
    `);
    // res.send('Hello World');
});
exports.default = app;
