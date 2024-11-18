import { Request, Response } from 'express'


export const createStudent = (req: Request, res: Response) => {
    const newData = req.body

    res.send(newData)
}