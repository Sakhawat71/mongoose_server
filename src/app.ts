import { studentRouter } from './app/modules/student/student.route';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRouter);

app.get('/', (req: Request, res: Response) => {
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

export default app;
