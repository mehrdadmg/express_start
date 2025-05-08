import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import usersControllers from './users/usersControllers'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use('/users', usersControllers)

const db_host =
  process.env.DB_HOST ||
  'mongodb+srv://mmajidzadehg:2r8dDw8f41yNQIUo@cluster0.pm3h2m2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const port = parseInt(process.env.APP_PORT || '4000')

mongoose
  .connect(db_host, {})
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
      /* logger.warn("express server is out of date")
        logger.info('Server is running on port 3000'); */
    })
  })
  .catch((err) => {
    console.log('error', err)
    /* logger.error("error" , err) */
  })
