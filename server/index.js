import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'

import postRoutes from './routes/posts.js'

//First thing to do with any express application you need to initialize app
//allows us to use different methods on the app instance
const app = express()

app.use('/posts', postRoutes)

//we're setting up body parser to properly send requests
app.use(bodyParser.json({ limit: '30mb', extended: true})) 
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true})) 
app.use(cors())

// https://www.mongobd.com/cloud/atlas
//we will move this because they should be hidden
const CONNECTION_URL = 'mongodb+srv://ptnepp:ptnepp123@cluster0.fbkh1dh.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))