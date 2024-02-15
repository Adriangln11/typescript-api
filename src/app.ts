import express, { json } from 'express'
import cors from 'cors'
import 'dotenv/config'

import { router } from './routes'
import dbConnection from './config/database'

const app = express()
app.set('port', process.env.PORT)
app.use(
  cors({
    origin: ['http://localhost'],
  })
)
app.use(json())
app.use(router)
dbConnection().then(() => console.log('Database conected'))

app.listen(app.get('port'), () => {
  console.log(`Listening on port: ${app.get('port')}`)
})
