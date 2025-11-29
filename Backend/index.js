import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import chatbotRoutes from './routes/chatbot.route.js'
import cors from 'cors';

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

//middleware
app.use(express.json());
app.use(cors());

//database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected')
})
.catch((err) => {
  console.error('Error:', err)
})

//Routes

app.use("/bot/v1", chatbotRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
