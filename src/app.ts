import { studentRouter } from './app/modules/student/student.route';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRouter);

app.get('/', (req: Request, res: Response) => {
    res.send({
        name: "try mongoose server",
        status: 200,
    });
});

export default app;
