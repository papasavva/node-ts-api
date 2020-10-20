import express, { Request, Response, NextFunction} from 'express'

import todoRoutes from './routes/todo'

const app = express()

app.use('/routes', todoRoutes)

//error handling
app.use((err: Error,req:Request, res: Response,next:NextFunction)=> {
    res.status(500).json({ message : err.message})
})
app.listen(3000)