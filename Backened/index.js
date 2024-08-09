import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv' 
import cors from 'cors'
import bookRoute from './route/book.route.js'
import userRoute from "./route/user.route.js"
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT=process.env.PORT||4000
const URI=process.env.MongoDBuri
//connect to mongodb
try {
  mongoose.connect(URI)
  console.log("connected to mongoDB")
} catch (error) {
  console.log("not connected")
}
//defining route
app.use('/book',bookRoute)
app.use('/user',userRoute)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})